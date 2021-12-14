import React, { useState } from "react";



// class RangeInput extends Component {
//     state = { value: 0 };
//     onChange = (event) => {
//         const value = event.target.value
//         this.setState({ value: value });
//     }

//     render() {
//         return (
//             <div className='input-range container'>
//                 <input type='range' onChange={this.onChange} value={this.state.value}></input>
//                 <input type='text' placeholder={this.state.value}></input>
//             </div>
//         )
//     }
// };
const RangeInput = (props) => {
    const [myState, setMyState] = useState({ value: 0 });

    const ChangeVal = (val) => {
        setMyState({ ...myState, value: val });
    }
    return (
        <div className='input-range container'>
            <input type='range' onChange={event => ChangeVal(event.target.value)} value={myState.value}></input>
            <input type='text' placeholder={myState.value}></input>
        </div>
    )
}



export default RangeInput;