import  React from 'react'
import {BrowserRouter as Router ,NavLink} from'react-router-dom';

const Left=() =>{
    return(
        <>
        
        <div className="left">
             <ul>
                 <li>
                 <NavLink activeStyle={{
                            fontWeight: 'bold',
                            color: '#f00'
                        }} to={{pathname:"/product/iam",state:{content:"iam"}}}>iam产品</NavLink>
                 </li>
                 <li>
                 <NavLink activeStyle={{
                            fontWeight: 'bold',
                            color: '#f00'
                        }} to={{pathname:"/product/devops",state:{content:"devops"}}}>devops产品</NavLink>
                     </li>
                 
             </ul>
         </div>
        </>
    );
}
export default Left;