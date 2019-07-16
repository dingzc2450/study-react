import  React from 'react'
import {Hello} from './Hello';
import Left from'./left';

const Section=(props) =>{
     return(
         <>
         <Left></Left>
        <Hello content="Choerodon"></Hello>
        </>
     );
}
export default Section;