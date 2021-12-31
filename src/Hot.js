import React,{Component} from "react";
import Cold from './Cold';
class Hot extends Component{
    state={
        flag:false
    }
    hotClick=() =>{
        this.setState({flag:true});

    }
    render(){
        let flags=this.state.flag;
        console.log(flags)
        if(flags){
            return <Cold/>


        }
        return(
            <div>
                <p>Condoitional Rendering Hot::</p>
                <button onClick={this.hotClick}>Cond rend</button>
            </div>
        )

    }
   
    
}
export default Hot;