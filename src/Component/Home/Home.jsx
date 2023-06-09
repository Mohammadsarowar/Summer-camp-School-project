import React from 'react';
import ExtaHome from './ExtaHome';
import Marquee from './Marquees';
import Discover from './Discover';
import EnterEmail from '../page/EnterEmail';
import ShowClass from '../../Layout/ShowClass';

const Home = () => {
    return (
        <div>
            <ExtaHome/>
            <Marquee/>
            <Discover/>
            <ShowClass/>
            <EnterEmail/>
        </div>
    );
};

export default Home;