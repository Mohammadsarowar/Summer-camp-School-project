import React from 'react';
import ExtaHome from './ExtaHome';
import Marquee from './Marquees';
import Discover from './Discover';

const Home = () => {
    return (
        <div>
            <ExtaHome/>
            <Marquee/>
            <Discover/>
        </div>
    );
};

export default Home;