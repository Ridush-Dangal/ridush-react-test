import React,{useState,useEffect} from 'react';
function Hook(){
    const[greeting,setName]=useState('Did You Woke up?');
    const[count,setCount]=useState(0);
    const changeName=()=>{
        setName('Good Morning there');
    }
    const changeCount=()=>{
        setCount(count+10);
    }
    
    return(
        <div>
            <i><br/>{greeting}</i><br/>
            
            <button onClick={changeName}>Yes</button><br/>
            <p>{count}</p>
            <button onClick={changeCount}>Today Your Luck%</button>
            
        </div>
    )

}
export default Hook;
