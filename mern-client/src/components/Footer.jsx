import React from 'react';
import { Footer } from 'flowbite-react';

const AppFooter = () => {
    return (
        <div className='w-full bg-slate-50 px-4 lg:px-24 py-4'>
            <Footer container className='w-full bg-teal-100'>
                <Footer.Copyright href="#" by="BookApp™" year={2023} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
}

export default AppFooter;
