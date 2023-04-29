import React, { useState, useEffect, createRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpin from "./LoadingSpin";
import CustomAlerts from "../utilities/CustomAlerts";



const Admin = ({profileid}) => {
  let [products, handleProducts] = useState([]);
  let [spinner, handleSpinner] = useState(true);
  let [sortType, handleSort] = useState("");
  let sortSelect = createRef();
  let [alertObj, handleShowAlert] = useState({showAlert: false, alertMsg:'' }) 
  let [getpid, sendpidHandle] = useState();
  let navigate = useNavigate();

let gotoAdd = () => {
  navigate('/addAdmin')

}



  useEffect(() => {
    axios.get(`http://localhost:3005/users/?profileid=${profileid}`).then((response) => {
      handleSpinner(false);
      handleProducts(response.data);
    })
    .catch(error => {
      handleSpinner(false);
      handleShowAlert({showAlert: true, alertMsg: error.message})
    
    }) 
    ;
  }

  , [products]);

  let deleteUser = (id)=>{
    axios.delete(`http://localhost:3005/users/${id}`).then(
      (response)=>{
        handleShowAlert({showAlert: true, alertMsg: 'User Deteled Successfullly'})
      }
    )
    
  }



  let sorting = () => {
    handleSort(sortSelect.current.value);
  };

  let productSelect = (pid) => {
    sendpidHandle(pid)
     alert(pid)
    //getproductid(pid)


  }

  let productsList = products
    .sort((a, b) => {
      try {
        if (sortType === "high") {
          return b.id - a.id;
        } else {
          return a.id - b.id;
        }
      } catch (err) {
        console.log(err);
      }

      return null;
    })
    .map((product) => {
      let productpath = "/productdetail/" + product.id;
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.username}</td>
          <td>{product.age}</td>
      
          <td>{product.hobby}</td>
          <td>
            <Link onClick={() => productSelect(product.id)} to={productpath}>admin</Link>
          </td>
          <td>
            <button onClick={()=>{}} className="btn btn-primary me-2">Edit</button>
            <button onClick={()=>{deleteUser(product.id)}} className="btn btn-danger">Delete</button>
            </td>
        </tr>
      );
    });

  return (
    <div>
      <h5>Family Details</h5>
      <button onClick={gotoAdd} className="btn btn-primary">add admin</button>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          {spinner ? <LoadingSpin spintype="text-success"></LoadingSpin> : null}
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <select
            ref={sortSelect}
            onChange={sorting}
            className="form-select col-2 px-0"
          >
            <option value="low">from low to high</option>
            <option value="high">from high to low</option>
          </select>
        </div>
      </div>
   
      <table className="table table-bordered table-rounded">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>age</th>
            <th>description</th>
            <th></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{productsList}</tbody>
      </table>
      {alertObj.showAlert ? <CustomAlerts alertType='alert-danger mt-3'  alertMsg={alertObj.alertMsg}></CustomAlerts> : null}
    </div>
  );
};
export default Admin;
