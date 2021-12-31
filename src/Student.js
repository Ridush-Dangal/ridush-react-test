import React,{Component} from 'react';
class Student extends Component{
    constructor(){
        super();
    }
    render(){
        var name="Ridush";
        var age=24;
        var phn=9861906613;
        return(
            <div>
                <h1> title</h1>
                <i>Name:{name}<br/>Age:{age},Phn:{phn}</i>
            </div>
        )
    }
    
}
export default Student;