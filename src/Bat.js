import React, {Component} from 'react';
import Capital from "./Capital";
class Bat extends Component{
    constructor(){
        super();
        this.state={
            name:"Nepal",
            capital:"Kathmandu",
        }

    }
    render(){
        return(
            <div>
                <b> Liftingg state</b>
                <Capital data={this.state}/>

            </div>
            
        )
        
    }
    
}
export default Bat;