import React,{Component} from 'react';
class Mystate extends Component{
    constructor(){
        super();
        this.state={
            name:'Codding tech',
            address:'Kathmandu',
            ward: 18,
            city: "Biratnagar",
            count:1
        }
        this.changeDate=this.changeDate.bind(this);
    }
    changeDate(){
        this.setState({name:'Codding Techno',address:"Balkumari",city:"Itahari"});
    }
    changeDates =() => {
        this.setState({name:'Codding Technology',address:"Balkumari chowk",city:"Itahari bajar"});
    }
    incrementCount= () => {
        this.setState({count:this.state.count+1});
    }
    render() {
        return(
            <div>
                <h3> using state:</h3>
                <h3>Name:{this.state.name},Address:{this.state.address}</h3><br/>
                <i> City:{this.state.city}</i><br/>
                <button onClick={this.changeDate}>Change Date</button><br/>
                <button onClick={this.changeDates}>Change Dates</button><br/>
                <button onClick={this.incrementCount}>Like {this.state.count}</button>
            </div>
        )
    }
}
export default Mystate;