import React, {Component} from 'react';
class Tol extends Component{
    constructor(props){
        super(props);
        this.state={
        
            tol:"Baneshwor"
        }

    }
    render(){
        return(
            <div>
                <b> Liftingg state</b>
               
                <p> Tole Name: {this.state.tol}</p>
                <p>Capital Name:{this.props.tdata}</p>
                <hr/>
                <p>Capital Name:{this.props.sd.name}</p>
                <p>Capital Name:{this.props.sd.capital}</p>


            </div>
        )
    }
}
export default Tol;