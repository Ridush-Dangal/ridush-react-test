import React,{Component} from 'react';
class UCF extends Component{
    constructor(){
        super();
        this.reactRef=React.createRef();
        this.state={
            value:''
        }

    }
    handleSubmit=()=>{
        this.reactRef.current.focus();
        this.reactRef.current.style.color='red';
        var val=this.reactRef.current.value;
        if(val<18){
            console.log('Invalid');
        }
        else{
            console.log('valid');
            this.setState({value:'valid for votting'});
        }
         
    }
    componentDidMount() {
        this.reactRef.current.focus();
     
    }
    render(){

        return(
        <div>
            <h3>uncontrolled form:<i>{this.state.value}</i></h3>
            <input type="text" ref={this.reactRef}/>
            <input type="submit" value="Submit" onClick={this.handleSubmit} value="Click Me"/>
        </div>
        )
    }
}
export default UCF;