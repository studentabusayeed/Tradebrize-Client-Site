import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../../shared/Footer/Footer';

const MainProfile = () => {
    return (
        <div className='pb-2'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainProfile;