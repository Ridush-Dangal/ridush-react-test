import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import First from './First';
import Html from './Html';
import Employee from './Employee';
import Student from './Student';
import Type from './Type';
import Mystate from'./Mystate';
import Bat from './Bat';
import Cycle from './Cycle';
import reactDom from 'react-dom';
import Evenpara from './Evenpara';
import Hot from './Hot';
import UCF from './UCF';
import CF from './CF';
import Expense from './Expense';
import Parents from'./Parents';
import Hooks from './Hooks';
import Hook from './Hook';
import Strict1 from './Strict1';
import Image from './Image';

import react from 'react';



var course='React';
var price=2000;

// reactDom.render(<First course={course} prices={price} no={'one123'}/>,document.getElementById("first"));
// reactDom.render(<Html/>,document.getElementById("html"));
// reactDom.render(<Employee course={course} prices={price} no={'one123'}/>,document.getElementById("employee"));
// reactDom.render(<Student/>,document.getElementById("student"));
// reactDom.render(<Type/>,document.getElementById("type"));
// reactDom.render(<Mystate/>,document.getElementById("mystate"));
// reactDom.render(<Bat/>,document.getElementById("bat"));
// reactDom.render(<Cycle/>,document.getElementById("cycle"));
// reactDom.render(<Evenpara/>,document.getElementById("evenpara"));
// reactDom.render(<Hot/>,document.getElementById("hot"));
// reactDom.render(<UCF/>,document.getElementById("ucf"));
// reactDom.render(<CF/>,document.getElementById("cf"));
// reactDom.render(<Parents/>,document.getElementById("parents"));
// reactDom.render(<Expense/>,document.getElementById("expense"));
// reactDom.render(<Hooks/>,document.getElementById("hooks"));
reactDom.render(<Hook/>,document.getElementById("hook"));
reactDom.render(<Strict1/>,document.getElementById("strict1"));
reactDom.render(<Image/>,document.getElementById("image"));
//reactDom.unmountComponentAtNode(document.getElementById("cycle"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
