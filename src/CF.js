import React,{Component} from 'react';
class CF extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastname:'',
            first:0,
            second:0

        }
    }
    
    handelChange=(e)=>{
        var name=e.target.name;
        var val=e.target.value;
        this.setState({[name]:val});
    }
    handelSubmit=()=>{
        console.log(this.state.firstName);
        console.log(this.state.lastName);

    }
    handelChange2=(e)=>{
        var name=e.target.name;
        var val=e.target.value;
        this.setState({[name]:val})

    }
    handleSum=()=>{
        console.log(this.state.first);
        console.log(this.state.second);
        const f=this.state.first;
        const s=this.state.second;
        const sum= parseInt(f) +parseInt(s);

        console.log(sum);

    }

  
    render(){
        return(
            <div>
                <h3>Controlled Form: Msg: <i></i></h3>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handelChange}></input>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handelChange} ></input><br/>
                
                <input type="submit" value="Submit" onClick={this.handleSubmit} value="Click Me" /><br/>
                <input type="text" name="first" value={this.state.first} onChange={this.handelChange2}></input>
                <input type="text" name="second" value={this.state.second} onChange={this.handelChange2}></input>
                <input type="submit" value="Submit" onClick={this.handleSum} value="Sum" /><br/>
            </div>

        )

    
        

    }
}
export default CF;