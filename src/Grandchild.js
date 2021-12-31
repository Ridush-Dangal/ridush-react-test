import React,{Component} from "react";
import{MyContext} from './Parents';
class Grandchild extends Component{
    render(){
        return(
        <div>
        <h3>This is Grandchild</h3>   
        <MyContext.Consumer>
            {
                ({data,handelClick})=>(
                    <div> 
                             <i>company Name:{data.name}</i><br/>
                             <i>company Ward:{data.ward}</i><br/>
                             <i>Count:{data.count}</i><br/>
                           <button onClick ={handelClick}>ContextCount</button>
                    </div>               )
            }
            </MyContext.Consumer>     
             </div>
        )
    }
}
export default Grandchild;