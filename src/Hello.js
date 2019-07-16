import  React from 'react'
export function IndexHello(){
    return(
        <div className="section">
             <h1>欢迎访问Choerodon</h1>
         </div>
    );
}
export function ProductHello(){
    return(
        <div className="section">
             <h1>欢迎访问Choerodon产品</h1>
         </div>
    );
}
export function IamHello(){
    return(
        <div className="section">
             <h1>欢迎访问iam产品</h1>
         </div>
    );
}
export function DevopsHello(){
    return(
        <div className="section">
             <h1>欢迎访问devops产品</h1>
         </div>
    );
}
 
export function Hello1(props){
    return(
    
        <div className="section">
             <h1>欢迎访问{props.name.content}产品</h1>
         </div>
         
    );
}
export class Hello extends React.Component{

    constructor(props){
        super(props);
        this.state={content:props.content};
    }
    render(){
        return(
            <div className="section">
                 <h1>欢迎访问{this.state.content}产品</h1>
             </div>
        );
    }
}