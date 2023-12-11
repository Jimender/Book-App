import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AppFooter from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <AppFooter/>
    </>
  )
}

export default App
