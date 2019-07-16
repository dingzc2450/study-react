
import React from 'react';
import Header from'./Header';
import Left from "./left";
import {Hello1 as Hello,ProductHello} from './Hello';
import {BrowserRouter as Router ,Route,Link,Switch } from'react-router-dom';



export function Product() {
    
    return (
        <>
        <Header></Header>
        <Left></Left>
        <ProductHello></ProductHello>
        </>
    );
}

export function Product0(props) {
    console.log(props);

    return (
        <>

        <Header />
        <Left></Left>
        <Hello name={props.location.state}></Hello>

        </>
    );
}

