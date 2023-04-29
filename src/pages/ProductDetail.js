import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import CustomAlerts from "../utilities/CustomAlerts";



const ProductDetail = ({currentpid}) => {
//    console.log('product' + JSON.stringify(product))

let [product, handleProducts] = useState({});
let [alertObj, handleShowAlert] = useState({showAlert: false, alertMsg:'' }) ;

useEffect(() => {
 
    axios.get(`http://localhost:3005/users/${currentpid}`)  //${currentpid}
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

 
  <div className="card-body">
  {product.id}
  <p className="">  {product.username}</p>
    <h5 className="card-title">{product.age}</h5>
    <p className="">{product.hobby}</p>
  </div> </div>
  


    </>
}
export default ProductDetail;