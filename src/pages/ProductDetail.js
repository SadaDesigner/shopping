import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import CustomAlerts from "../utilities/CustomAlerts";



const ProductDetail = ({currentpid}) => {
//    console.log('product' + JSON.stringify(product))

let [product, handleProducts] = useState({});
let [alertObj, handleShowAlert] = useState({showAlert: false, alertMsg:'' }) ;

useEffect(() => {
 
    axios.get(`http://localhost:3005/products/${currentpid}`)  //${currentpid}
    .then(
        response => handleProducts(response.data)
    )
    .catch((error) => {
      if(error.response) {
        //console.log(error.response)
        handleShowAlert({showAlert: true, alertMsg: error.response.status + error.response.statusText})
      }
      else {
        //console.log('error' + error.message)
      }
      
    })
}, [])



    return <>
    <Link to='/admin'>Back</Link>
    
    <h5>Product Detail {currentpid}</h5>
     {alertObj.showAlert ? <CustomAlerts alertType='alert-danger'  alertMsg={alertObj.alertMsg}></CustomAlerts> : null}
   <div className="card mb-3" style={{width:'100%'}}>
        {product.image}
 
  <div className="card-body">
  <p className="">{product.id}</p>
    <h5 className="card-title">{product.name}</h5>
    <p className="">{product.description}</p>
  </div> </div>
  


    </>
}
export default ProductDetail;