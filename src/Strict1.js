import React,{Component,StrictMode} from 'react';
import Strict2 from './Strict2';
class Strict1 extends Component{
    render(){
        return(
            <div>
                <React.StrictMode>
                    //call any no of components here.
                <Strict2/> 
                </React.StrictMode>
                
                 </div>
        )
    }
}
export default Strict1;