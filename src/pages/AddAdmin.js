import React from "react";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
    let navigate = useNavigate();
    return (
        <div>
              <button onClick={() => {navigate('/admin')}} className="btn btn-info">Back</button>
            <form>
                <div className="row mb-3">
                    <div className="col-form-label col-3">Name</div>
                    <div className="col-6"><input name="name" type='text' className="form-control"></input></div>

                    
                </div>

                <div className="row mb-3">
                    <div className="col-form-label col-3">Image</div>
                    <div className="col-6"><input name="image" type='text' className="form-control"></input></div>

                    
                </div>

                <div className="row mb-3">
                    <div className="col-form-label col-3">Description</div>
                    <div className="col-6"><input name="description" type='text' className="form-control"></input></div>

                    
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )  
      
    
}

export default AddAdmin