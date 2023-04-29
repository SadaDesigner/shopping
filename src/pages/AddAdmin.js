import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddAdmin = ({profileid}) => {
    let [selectuser, handleselectuser] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3005/users/9`).then((response) => {
          //handleSpinner(false);
          handleselectuser(response);
             
   
          //handleProducts(response.data);
        })
        .catch(error => {
          //handleSpinner(false);
         // handleShowAlert({showAlert: true, alertMsg: error.message})
        
        }) 
    
      });

      console.log( selectuser.username)

   


//default form values

    let [username, setUsername] = useState();
    let [age, setAge] = useState();
    let [hobby, setHobby] = useState();


    let HOBBIES = ['singing songs', 'listening music', 'watching movies', 'playing games']


    //event handlers

    let getFormUsername = (e) => {
        setUsername(e.target.value)

    }

    let getFormAge = (e) => {
        setAge(e.target.value)
        
    }

    let getFormHobby = (e) => {
        setHobby(e.target.value)
        alert(e.target.value)
        
    }


    //submit handler

    let submitForm = (e) => {
        e.preventDefault();
        let formdata = {
            username: username,
            age: age,
            hobby: hobby,
            profileid: profileid
        }

        //console.log(JSON.stringify(formdata))

          axios.post('http://localhost:3005/users', formdata)
            .then((response) => {
                console.log(response)
                navigate('/admin')
            })
     

    }


    return (
        <div>{profileid}
              <button onClick={() => {navigate('/admin')}} className="btn btn-info">Back</button>
            <form onSubmit={submitForm}>
                <div className="row mb-3">
                    <div className="col-form-label col-3">Name</div>
                    <div className="col-6"><input onChange={getFormUsername} name="name" value={username} type='text' className="form-control"></input></div>

                    
                </div>

                <div className="row mb-3">
                    <div className="col-form-label col-3">Age</div>
                    <div className="col-6"><input  onChange={getFormAge} name="image" value={age} type='text' className="form-control"></input></div>

                    
                </div>

                <div className="row mb-3">
                    <div className="col-form-label col-3">Hobby</div>
                    <div className="col-6">
                        <select className="form-control"  onChange={getFormHobby}  value={hobby}>
                            {HOBBIES.map((hob, index) => {
                                return <option value={hob}>{hob}</option>
                            }) }
                        </select>
                       </div>

                    
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
    )  
      
    
}

export default AddAdmin