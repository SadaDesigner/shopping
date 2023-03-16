import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import NavBar from "./layout/NavBar";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import News from "./pages/News";
import Admin from "./pages/Admin";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";
import ErrorRoute from "./pages/ErrorRoute";
import Login from "./layout/Login";
import AddAdmin from "./pages/AddAdmin";

let myvalue = "value from app to badge";
export const useIt = React.createContext(myvalue);

function App() {
  let mytext = "value from app to badge";
  let [currentpid, productHandle] = useState(null);
  let getproductid = (id) => {
    productHandle(id);
  };

  let isAdmin = true;
  return (
    <>
  
      {currentpid}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <div className="col-12 col-sm-2">
              <NavBar />

              {/* <Link to={`about`}>About</Link> */}
            </div>
            <div className="col-12 col-sm-10">
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/news" element={<News></News>}></Route>
                <Route
                  path="/settings"
                  element={
                    <useIt.Provider value={mytext}>
                      <Settings />
                    </useIt.Provider>
                  }
                ></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
                {isAdmin ? 
                  <Route
                  path="/admin"
                  element={<Admin getproductid={getproductid}></Admin>}
                ></Route> : <Route
                path="/admin"
                element={<Login></Login>}
              ></Route>}
              
                <Route
                  path="/productdetail/*"
                  element={
                    <ProductDetail currentpid={currentpid}></ProductDetail>
                  }
                ></Route>
              
              <Route
                  path="/addadmin"
                  element={
                   <AddAdmin></AddAdmin>
                  }
                ></Route>
                <Route path="*" element={<ErrorRoute></ErrorRoute>}></Route>
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
