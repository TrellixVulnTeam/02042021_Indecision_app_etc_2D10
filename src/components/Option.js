import React from 'react';

const Option = (props) => (
    <div className="option">
            
            <p className="option__text">{props.count}. {props.optionText}</p>
            
            <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
                Remove
            </button>
        </div>
)

export default Option;
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         );
//     };
// }


// Option -> Option component here

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

