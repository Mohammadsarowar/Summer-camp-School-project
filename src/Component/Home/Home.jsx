import React from 'react';
import ExtaHome from './ExtaHome';
import Marquee from './Marquees';
import Discover from './Discover';
import EnterEmail from '../page/EnterEmail';
import ShowClass from '../../Layout/ShowClass';
import ShowInstructor from '../../Share/ShowInstructor';

const Home = () => {
    return (
        <div>
            <ExtaHome/>
            <Marquee/>
            <Discover/>
            <ShowClass/>
            <ShowInstructor/>
            <EnterEmail/>
        </div>
    );
};

export default Home;