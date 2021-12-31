import React, { Component } from 'react'
import lily from './lily.jpg';
import Image2 from './Image2';
import Error from './Error';

class Image1 extends Component {
    render() {
        return (
            <div>
                <h3>Using Error Boundry, For Error Handling</h3>
                <Error>
                    <Image2 scene={lily} /> <br />
                </Error>
                {/* <Error>
                    <Image2 scene='abcd' /> <br />
                </Error> */}
            </div>
        )
    }
}
export default Image1;
