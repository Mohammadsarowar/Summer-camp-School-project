import React, { useContext } from 'react';
import  { AuthContext } from '../route/AuthProvider';
import { FaGoogle } from "react-icons/fa";

import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const {googleSignIn} = useContext(AuthContext)
       const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const googleLogin = () =>{
        googleSignIn()
        .then((result)=>{
            const loggedInUser = result.user;
           
                const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email, photoURL:loggedInUser.photoURL}
                fetch('https://summer-camp-school-server-nu.vercel.app/users',{
                  method:'POST',
                  headers:{
                    'content-type' : 'application/json'
                  },
                  body:JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(() => {
                   navigate(from,{replace:true}) 
               
                })
                
          


          

        })
    
      }
    return (
        <div className=" text-center">
        <div className='text-center'><button onClick={googleLogin} className='btn rounded-full hover:bg-blue-500'><FaGoogle className=' text-lg'/></button></div></div>
    );
};

export default Social;