import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from '../assets/google-logo.svg';

const Login = () => {
    
    const imgURL = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const {login, loginWithGoogle} = useContext(AuthContext);

    const [error, setError] = useState("error");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state ?.from?.pathname || "/";

    useEffect(() => {
        return () => {
            setError("");
        };
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
        login(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('Login Successful!!');
            navigate(from, { replace: true });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Set the error state to display the error message
            setError(errorMessage);

            // Handle specific error cases (if needed)
            if (errorCode === 'auth/user-not-found') {
                // Handle case where user is not found
                setError('User not found. Please check your email.');
            } else if (errorCode === 'auth/wrong-password') {
                // Handle case where the password is incorrect
                setError('Incorrect password. Please try again.');
            } else if (errorCode === 'auth/invalid-credential') {
                // Handle case where credentials are invalid
                setError('Invalid credentials. Please check your email and password.');
            } else {
                // Handle other error cases
                console.error('Error logging in:', errorCode, errorMessage);
            }
        });
    };    
    

    // Sign up using google account
    const handleRegister = () => {
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            navigate(from, {replace: true});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing up:', errorCode, errorMessage);
            serError(errorMessage);
        });
    }

  return (
    <div className="bg-slate-200 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: '500px' }}>
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-5xl text-center font-bold kalnia">Login</h1>
              <div className="w-full mt-4">
                <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleLogin}>
                  <div className="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      defaultValue=""
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  {/* <div className="flex items-center mt-4">
                    <input type="checkbox" name="remember" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div> */}
                  {error && (
                        <div className="text-red-500 text-sm mt-2">
                            {error}
                        </div>
                    )}
                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center my-4">
                  <p className='text-blue-dark text-xs'>Don't have an Account? <Link to='/sign-up' className='no-underline hover:underline'>Register</Link></p>
                  <a className="no-underline hover:underline text-blue-dark text-xs" href="#">
                    Forgot Your Password?
                  </a>
                </div>
                <hr />
                  <div className='flex w-full items-center flex-col mt-5 gap-3'>
                    <button onClick={handleRegister} className='block'>
                        <img src={googleLogo} alt="" className='w-12 h-12 inline-block' /> Login With Google
                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg bg-cover bg-center"
            style={{
              background:
                `url(${imgURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login
