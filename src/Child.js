import React,{Component} from "react";
import Grandchild from './Grandchild';
class Child extends Component{
    render(){
        return(
        <div>
                
        <h3>This is child component</h3>   
        <Grandchild/>     
                
         </div>
        )
     
    }
    
}
export default Child;