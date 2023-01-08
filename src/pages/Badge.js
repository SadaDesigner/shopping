import { useContext } from 'react';
import {useIt} from './../App.js';



const Badge = (props) => {
    const usevaluefromapp = useContext(useIt);
    return <div>
         <span className="badge bg-secondary">{props.badgeValue}</span>
       
        <span className="badge bg-secondary">{usevaluefromapp}</span>


       
    </div>
}

export default Badge;