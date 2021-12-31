import React,{Component} from 'react';
import Pt from 'prop-types';
class Typedata extends Component{
    render(){
        var fruits= ['apple','orange','grapes','banana'];
        var num=[11111,22222,33333,44444,55555];
        return(
           
            <div>
                
                <h3>Display: </h3>
                <i> Name: {this.props.name},Age:{this.props.age}</i>
        
                
                {fruits.map((f,i) => <li key={i}> {f} </li>)}
                
                <ol>
                    {num.map((n,i) => <li key={i}>{n}</li>)}
                </ol>

                

            </div>
        )
    }
}
Typedata.propTypes={
    name:Pt.string.isRequired,
    age:Pt.number
}
export default Typedata;