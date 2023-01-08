//import About from './About';
import Badge from "./Badge";
const Settings = () => {
    let notifycount = 8;
    return <div>
       <h5>Settings</h5>
       <Badge badgeValue={notifycount} />
    </div>
}

export default Settings;