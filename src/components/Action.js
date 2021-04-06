//handleDeleteOptions

// IndecisionApp.defaultProps = {
//     options: []
// }
import React from 'react';


const Action = (props) => (
          <div>
            <button 
            className="big-btn"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            > 
            What should I do?
            </button>
        </div>
)

export default Action;

// class Action extends React.Component {


//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 > 
//                 What should I do?
//                 </button>
//             </div>
//         );
//     };
// }

// Setup options prop for Options component
// Render the length of the array
// Render new p tag for each option (set text, set key)

// Add Reomve All button
// Setup handleRomoveAll -> alert some message
// Setup onClick to fire the method






// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }