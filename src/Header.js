import  React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Header=() =>{
     return(
         <div className="header">
             <ul>
                 <li>
                 <NavLink activeStyle={{
                            fontWeight: 'bold',
                            color: '#f00'
                        }} to="/">首页</NavLink></li>
                 <li><NavLink activeStyle={{
                            fontWeight: 'bold',
                            color: '#f00'
                        }} to={{pathname:"/product",state:{content:"Choerodon"}}}
                        >产品</NavLink>
                 </li>
             </ul>
         </div>
     );
}
export default Header;