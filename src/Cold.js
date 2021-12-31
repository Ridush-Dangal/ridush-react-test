import React,{Component} from "react";
import Hot from './Hot';
class Cold extends Component{
    state={
        flag:false
    }
   
    coldClick=() =>{
        this.setState({flag:true});


    }
    render(){
        let flags=this.state.flag;
        if(flags){
            return <Hot/>
        }
        return(
            <div>
                <p>Conditional Rendering Cold section</p>
                <button onClick={this.coldClick}>Go Hot</button>
            </div>
        )

    }
   
    
}
export default Cold;