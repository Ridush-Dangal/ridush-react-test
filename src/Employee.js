import React,{Component} from 'react';
import Address from './Address';
class Employee extends Component{
    constructor(){

        super();
    }
    render(){
        var company="Cooding Tech";
        var sum=50+20;
        return(
            <div>
                <h3>This is class component</h3>
                <h3>Props in class component: Course:{this.props.course},Price{this.props.prices},{this.props.no}</h3>
                <i>Company:{company},Sum is{sum}</i>
                <Address/>
            </div>
            
        )
        
    }
    
    
}
export default Employee;