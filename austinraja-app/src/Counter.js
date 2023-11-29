import React, {useEffect}from "react";

// DATA Structures => geeksforgeeks

import {Axios} from "axios";
// react State management libraies

// mui  =>css framwork
// tailwind => css
// bootstrap => 

const countReducer = (count = 0,action) =>{
        // switch(action){
        //     case "inc":
        //          count++
        //          break;
        //     case "dec" : count--
        //     break;
        //     case "rec" : count = 0
        //     break;
        // } 
        if(action === "inc")return count + 1;
        if(action === "dec")return count - 1;
        if(action === "rec")return 0;

        return count;
}


function Counter(){
// const [count, setCount] = React.useState(0);
    //              ||
    // useState array return panum
    // that array la [ first element, function]
    //              ||
    const [count, dispatch] = React.useReducer(countReducer,0);
    // useReducer ( first function,initial value)
    // dispatch function use panna countReducer call agum
    const inc = () =>{ 
        dispatch("inc")}
    const dec = () =>{
        dispatch("dec")}
    const res = () =>{
        dispatch("rec");
    }

    // const [name ,setSearch] = React.useState();

    useEffect(()=>{
    
    });//State update agumpothu call agum
    useEffect(()=>{
    
    },[]);//one time call agum
    useEffect(()=>{
    
    },[count]);
    useEffect(()=>{
        console.log("as")
    },[name]);

    // const apiCall = async() =>{
    //     await Axios.get("")
    // } 
return(
    <>
    <h3 className="text-warning">Counter Component</h3>
    {/* <input type="text" value={name} onChange={({target:{value}})=> setSearch(value)}  /> */}
    <h3 className="text-primary">count -{count}</h3>
    <button className="btn btn-primary" onClick={inc}>+</button>{" "}
    <button className="btn btn-warning" onClick={dec}>-</button>{" "}
    <button className="btn btn-danger" onClick={res}>0</button>

    </>
)
}

export default Counter;