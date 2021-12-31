import React,{Fragment} from 'react';
import  Second from './Second';
import Try from './Try';

function First(props){
    var name='ridush';
    var age=24;
    var address="biratnagar";
    return(
//         <div>
//             <h3> First React Component.</h3>
//             <h3>Name={name},Age={age},Address={address} </h3>
//             <i>Course:{props.course},Price is:{props.prices},{props.no}</i>
//         </div>
//     )
// }
<Fragment>
<h3> First React Component.</h3>
             <h3>Name={name}<br />Age={age}<br />Address={address} </h3>
            <i>Course:{props.course},Price is:{props.prices},{props.no}</i>
            <Second/>
            <Try/>
            
</Fragment>

    )
}
export default First;