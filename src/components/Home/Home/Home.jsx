import React from 'react';
import Friend from '../friend/friend';
import Marquee from "../marque/marque"
import Category from "../category/category";
import Member from '../member/member';
import Withdraw from '../Withdraw/Withdraw';
import Feature from '../Feature/Feature';
const Home = () => {
    return (
        <div className='pb-20'>
            <Friend />
            <Marquee />
            <Category />
            <Member />
            <Withdraw />
            <Feature />
        </div>
    );
};

export default Home;