import React,{Component} from 'react';
class Error extends Component{
    state={
        hasError:false
    };
    static getDerivedStateFromError(error){
        return{hasError:true}
    }
     render(){
        if(this.state.hasError){
            return <h3>NO Image Found!!</h3>
        }
        return this.props.children;
    }
}
export default Error;