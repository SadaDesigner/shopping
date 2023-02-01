import axios from "axios";
import { useEffect, useState } from "react";

const Profile = (props) => {
  let [posts, handlePosts] = useState([]);

  let myuser = {
    email: "bsada@gmail.com",
    name: "sadashiv bachwar",
    message: "welcome to react",
   
  };

  useEffect(() => {
    gettingPosts();
  }, []);

  const gettingPosts = () => {
    axios.get().then((response) => {
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
    axios.post("", myuser).then((response) => {
      console.log(response.data);
    });
    gettingPosts();
  };

  let singlepost = posts.map((spost) => {
    console.log(spost)

  
    return (
      <li className="list-group-item d-flex" key={spost.id}>
        <div>{spost.id}</div>
        <div>{spost.name}</div>
        <div>{spost.email}</div>

        <div>{spost.message}</div>
        <div>{spost.number}</div>
      </li>
    );
  });

  return (
    <div>
      <h5>Profile</h5>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-success" onClick={createPost}>
            Create Post
          </button>
          <button className="btn btn-success">Delete Post</button>
        </div>
      </div>
      <ul className="list-group">{singlepost}</ul>
    </div>
  );
};

export default Profile;
