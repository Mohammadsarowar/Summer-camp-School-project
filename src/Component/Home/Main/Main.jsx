import React from 'react';
import Nabvar from '../Nabver/Nabvar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nabvar/>
            <div className="min-h-[calc(100vh-137px)]">
      <Outlet />
     </div>
     <Footer/>
        </div>
    );
};

export default Main;