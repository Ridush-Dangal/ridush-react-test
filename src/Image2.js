import React, {Component} from 'react'
class Image2 extends Component{
    render(){
        if(this.props.scene === 'abcd'){
            throw new Error('Throwing Error Boundary Messages...Image Not Found.');
        }
        return (
            <div>
                <img src={this.props.scene} alt='Natural Scene' width='200px'></img>
            </div>
        )
    }
}
export default Image2;
