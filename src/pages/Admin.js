import React, { useState, useEffect, createRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpin from "./LoadingSpin";
import CustomAlerts from "../utilities/CustomAlerts";



const Admin = ({getproductid}) => {
  let [products, handleProducts] = useState([]);
  let [spinner, handleSpinner] = useState(true);
  let [sortType, handleSort] = useState("");
  let sortSelect = createRef();
  let [alertObj, handleShowAlert] = useState({showAlert: false, alertMsg:'' }) 
  //let [getpid, sendpidHandle] = useState();
  let navigate = useNavigate();

let gotoAdd = () => {
  navigate('/addAdmin')

}



  useEffect(() => {
    axios.get("http://localhost:3005/products").then((response) => {
      handleSpinner(false);
      handleProducts(response.data);
    })
    .catch(error => {
      handleSpinner(false);
      handleShowAlert({showAlert: true, alertMsg: error.message})
    
    }) 
    ;
  }, []);



  let sorting = () => {
    handleSort(sortSelect.current.value);
  };

  let productSelect = (pid) => {
    //sendpidHandle(pid)
     //alert(pid)
     getproductid(pid)


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
          <td>{product.image}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>
            <Link onClick={() => productSelect(product.id)} to={productpath}>admin</Link>
          </td>
        </tr>
      );
    });

  return (
    <div>
      <h5>Admin</h5>
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
            <th>Image</th>
            <th>name</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{productsList}</tbody>
      </table>
      {alertObj.showAlert ? <CustomAlerts alertType='alert-danger mt-3'  alertMsg={alertObj.alertMsg}></CustomAlerts> : null}
    </div>
  );
};
export default Admin;
