// stateless functional component


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if (options) {
            this.setState(() => ({ options }));
        }

        } catch(e) {
            //Do nothing at all

        }
        
        
        
    }
    componentDidUpdate() {
        if (this.state.options.length !== 0) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState(() => ({
            options: this.state.options.filter((option) => optionToRemove !== option)
        }))
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 

        this.setState(() => ({ options: this.state.options.concat([option]) }))
    }
    // handlePick - pass down to Action and setup onClick- bind here
    //  randomly pick an option and alert it.
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
//handleDeleteOptions

// IndecisionApp.defaultProps = {
//     options: []
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title : 'Indecison App!'
}
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle} </h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            > 
            What should I do?
            </button>
        </div>
    );
}


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

const Options = (props) => {
    return ( 
        <div>
        {
        props.options.map((option) =>  (
            <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
        ))
        }
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        </div>
    );
}


// class Options extends React.Component {

//     render() {
//         return ( 
//             <div>
//             {
//             this.props.options.map((option) =>  <Option key={option} optionText={option}/>)
//             }
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             </div>
//         );
//     };
// }


const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
                Remove
            </button>
        </div>
    );
}


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

class AddOption extends React.Component {
    constructor(props) {
        super(props); {
            this.handleAddOption = this.handleAddOption.bind(this);
            this.state = {
                error: undefined
            };
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))


        if (!error) {
            e.target.elements.option.value = '';
        }
    //     this.setState(() => {
    //         return 
    //     });
    }
        
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    };
}


// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));