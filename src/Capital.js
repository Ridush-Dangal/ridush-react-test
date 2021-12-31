import React, {Component} from 'react';
import Tol from "./Tol";
class Capital extends Component{
    constructor(props){
        super(props);
        this.state={
        
            capital:"KTM"
        }

    }
    render(){
        return(
            <div>
                <b> Liftingg state</b>
                <p> Data: {this.props.data.name}</p>
                <p> Data: {this.props.data.capital}</p>
                <Tol tdata={this.state.capital} sd={this.props.data}/>

            </div>
        )
    }
}
export default Capital;