import React,{Component} from 'react';
class Evenpara extends Component{
    constructor(){
        super();
        this.state={
            count : 0,
            msg:''
        }
       }
       eventHandle=(id) => {
           this.setState({count:this.state.count+id});
           if(this.state.count %2 ==0)
           {
               this.state.msg='Printing Even Value:' + this.state.count;
           }
           else
           {
               this.state.msg='Printing Odd Value:' + this.state.count;
           }
           console.log('Idd...'+id);
       }

    
    render(){
        return(
            <div>
                <b>EvenPara:Count{this.state.msg} </b> <br/>
                <button onClick={this.eventHandle.bind(this,1)}>Pass Parameter</button>

            </div>

        )
    }

    }
export default Evenpara;