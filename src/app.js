// install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecistionApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// }



// stateless functional component

// Moving the component code
// Setup import/export
// Move the imports to that new files (and setup an import here)




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'David';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi, My name is ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // -------

// class NewSyntax {
//     name = 'Jenny'; 
//     getGreeting = () => {
//         return `Hi, My name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());