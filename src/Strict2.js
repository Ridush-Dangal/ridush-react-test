import React,{Component} from 'react';
class Strict2 extends Component{
    componentWillMount(){
        console.log('User componentWillMount() used for strict mode..')
    }
    render(){
        return(
            <div>
                <i>
                    Strict mode is used to throw warning regarding the lifecycle that will not used in future.<br/>
                    Its use will not effect in the production mode.
                </i>

            </div>
        )
    }
}
export default Strict2;