import './App.css';
import React, { useState } from 'react';
import {
  createBrowserRouter, BrowserRouter, Routes, Route,
  RouterProvider, Outlet, usevigate } from "react-router-dom";

import ErrorRoute from './pages/ErrorRoute';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './pages/NavBar';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import { useContext } from 'react';
import Badge from './pages/Badge';



let myvalue = 'value from app to badge';
export const useIt = React.createContext(myvalue);

function App() {
//   const myroute = createBrowserRouter([
//     {
//     path: '/',
//     element: <Home />,
//     errorElement: <ErrorRoute />
//   },
//   {
//     path: '/home',
//     element: <Home />,
//     errorElement: <ErrorRoute />
//   },
//   {
//     path: '/about',
//     element: <About />,
  
//   },
//   {
//     path: '/settings',
//     element: <Settings />,
  
//   },
//   {
//     path: '/profile',
//     element: <Profile />,
  
//   }

 

// ])

let mytext = 'value from app to badge';

 


  return (
    <>

    <Header />
    <div className="container-fluid">
      <div className="row">
      <BrowserRouter> 
   
        <div className='col-12 col-sm-2'>
   
            <NavBar />
       
          {/* <Link to={`about`}>About</Link> */}
        </div>
        <div className='col-12 col-sm-10'>

        <Routes>
              <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/settings' element={
                   <useIt.Provider value={mytext}>
                    <Settings />
                  </useIt.Provider>
                }></Route>
                <Route path='/profile' element={<Profile></Profile>}></Route>
            </Routes>
 
        {/* <RouterProvider router={myroute}></RouterProvider> */}
        </div>
        </BrowserRouter>
      </div>

     
    </div>
   
   
    </>
  );
}

export default App;
