//import About from './About';
import Badge from "./Badge";
const Settings = () => {
    let notifycount = 8;
    return <div>
       <h5>Settings</h5>
       <Badge badgeValue={notifycount} />

       <div className="row">
        <div className="col-12">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Dark Theme
                <span class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
               
                </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Notifications
                <span class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
               
                </span>
            </li>
           
            </ul>
        </div>
       </div>
    </div>
}

export default Settings;