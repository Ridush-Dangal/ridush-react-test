import React,{Component} from "react";
import Child from './Child';
export const MyContext=React.createContext();
class Parents extends Component{
    state={
        name:'codding technology',
        ward:32,
        count:5
    }
    handelClick=()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        const contextData={
            data:this.state,
            handelClick:this.handelClick
        }
        return(

            <div>
                <h3> Parents Context</h3>
                <MyContext.Provider value={contextData}>
                <Child/>


                </MyContext.Provider>
          

            </div>
        )
    }
}
export default Parents;