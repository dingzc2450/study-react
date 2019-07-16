import React from 'react';
import Header from'./Header';
import {Hello} from './Hello';
import {action,computed } from'mobx';
import {observer} from 'mobx-react';
@observer
class App extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    setData(){

    }
    render()
    {    
    return(
        <>
        <Header />
    <div className="section">
             <h1>欢迎访问Choerodon</h1>
    </div>
                   </>
    );
    }
}

export default App;