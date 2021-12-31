import React,{Component} from 'react';
import Typedata from './Typedata';
class Type extends Component{
    render(){
        return(
            <div>
                <h3>Typechecking </h3>
                <Typedata name={"Ridush"} age={23}/>
            </div>
        )
    }
}
export default Type;