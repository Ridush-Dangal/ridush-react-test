import React,{Component} from 'react';
class Cycle extends Component{
    constructor(){
        super();
        this.state={
            salary:5000,
            color: "red"
        }
        console.log('1.Constructor runs first');
    }
    handleChangeState = ()=> {
        this.setState({salary:this.state.salary+1000});
    }
    static getDerivedStateFromProps(props,state){
        console.log('2.At the second stage getDerivedFromProps()runs');
        console.log(props,state);

    }
    componentDidMount(){
        console.log('4.At Fourth Step of Mouting,componentDIDMout() runs.');
    }
    componentDidUpdate(){
        console.log("5.componentDidUpdate()runs after any change in the state.");
    }
    componentWillUnamount(){
        console.log("Component will Unmount..");
    }
    render(){
        console.log("3. At third step render() runs and,actually outputs the");
        return(
            <div>
                <h3>Life cycle methods</h3>
                <p>Salary is:{this.state.salary}</p>
               
                <button onClick={this.handleChangeState}>Chk componentDidUpdate</button>

            </div>

        )
    }

    }
    

export default Cycle;