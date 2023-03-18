import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGoogleLogin } from '@react-oauth/google';



const Login = ({ getIsLogged }) => {


  let [user, setUser] = useState([])  //response
  let [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (res) => {
     // console.log(res)
      setUser(res)


    },
    onError: () => {
      console.log('error')
    }
  })

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
            console.log(res.data)
            getIsLogged(user, res.data)


          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );


  return (
    <>

      <div className="offset-3 col-6 mt-5">
        
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">

        <form>
          <h2 className="mt-3 text-2xl">Signin</h2>
          {profile ? profile.name : ''}
          <div className="row">
            <div className="col-md-12 mb-2">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="enter your username"></input>
            </div>
            <div className="col-md-12 mb-2">
              {user ? `` : <label>Password</label>}
              <input type="text" className="form-control" placeholder="enter password"></input>
            </div>
            <div className="col-md-12">

           
            <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>

        <h4 className="mt-3 pt-10 pb-3 text-2xl">Signin with Google</h4>
        <button onClick={() => login()} type="button" class="login-with-google-btn" >
          Sign in with Google
        </button>
    
        </div>

      </div>

      


    </>
  );
};
export default Login;
