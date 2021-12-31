import React,{useState,useEffect} from 'react';
function Hooks(){
    const[name,setName]=useState('codding');
    const[count,setCount] =useState(10);
    const changeName=()=>{
        setName('technology');
    }
    const changeCount=()=>{
        setCount(count+5);
    }
    useEffect(()=>{
        console.log("running use effect.");
    },[count]
    )
    return(
        <div>
            <p>Using Hooks:Name is{name}</p>
            <p>Count={count}</p>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeCount}>Change Count</button>

        </div>
    )

}
export default Hooks;
