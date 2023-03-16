import axios from "axios";
import { useEffect, useState} from "react";
import LoadingSpin from "./LoadingSpin";
import CustomAlerts from "../utilities/CustomAlerts";

const Profile = (props) => {
  let [posts, handlePosts] = useState([]);
  let [spinner, handleSpinner] = useState(false);
  let [alertObj, handleShowAlert] = useState({alertType: '', showAlert: false, alertMsg:'' }) 


  let myuser = {
    email: "bsada@gmail.com",
    name: "sadashiv bachwar",
    message: "welcome to react",
 
   
  };
  const gettingPosts = () => {
    axios.get(`.json`).then((response) => {
      let postarray = [];
      // console.log(response.data) //response coming object of objects
      for (let key in response.data) {
        //looping above objects of objects and separate key object
        postarray.push({ ...response.data[key], id: key }); // key object and id is pushing to postarray
      }

      handlePosts(postarray); //post array sending to posts state
    });
  };

  const createPost = () => {
    axios.post(`.json`, myuser).then((response) => {
      //console.log(response.data);
      gettingPosts();
    });
  
  };

  useEffect(() => {
    gettingPosts();
    //console.log('use effect calling')
   
  }, []);


  const deletePost = (sid) => {
   
    handleSpinner(true)

  

    axios.delete(`/${sid}.json`).then(response => {
       //console.log(response);
       handleSpinner(false)
       handleShowAlert({showAlert: true, alertType:'alert-success', alertMsg: 'successfully deleted'})
       setTimeout(() => {
        handleShowAlert({showAlert: false})
       }, 3000);
       gettingPosts();
    })
    .catch((error) => {
        debugger;
        handleSpinner(false)
        handleShowAlert({showAlert: true, alertType:'alert-danger', alertMsg: error.message})
    })
  
  }

  let singlepost = posts.map((spost) => {
  
    return (
        <>
        <li className="list-group-item d-flex" key={spost.id} onClick={() => deletePost(spost.id)}>
            <div>{spost.id}</div>
            <div>{spost.name}</div>
            <div>{spost.email}</div>

            <div>{spost.message}</div>
            <div>{spost.number}</div>
            <button className="btn btn-danger">Delete</button>
        </li>
       
       </>
    );
  });

  return (
    <div>
      <h5>Profile</h5>
      <div className="row">
        <div className="col-12 d-flex mb-2">
          <button className="btn btn-success ms-auto" onClick={createPost}>
            Create Post
          </button>
        
        </div>
      </div>
      {alertObj.showAlert ? <CustomAlerts alertType={alertObj.alertType}  alertMsg={alertObj.alertMsg}></CustomAlerts> : null}
      <ul className="list-group">{singlepost}
      <div className="d-flex justify-content-center mt-3">
      {spinner ? <LoadingSpin spintype="text-success"></LoadingSpin> : null}
      </div>
     
      </ul>
    </div>
  );
};

export default Profile;
