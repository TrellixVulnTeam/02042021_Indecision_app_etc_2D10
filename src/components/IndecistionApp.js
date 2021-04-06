import React from 'react';
import AddOption from './AddOption.js'
import Options from './Options.js'
import Header from './Header.js'
import Action from './Action.js'
import OptionModal from './OptionModal.js'


// pull the state out of constructor
// conver all 4 event handlers to class properties (arrow functions)
// delete the constructor completely
// start with class properties and end with the method

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption : undefined
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
        // use setState to set selectedOption
    };
    deleteSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState(() => ({
            options: this.state.options.filter((option) => optionToRemove !== option)
    }))
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
    }   else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
    } 

    this.setState(() => ({ options: this.state.options.concat([option]) }))
    };

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
        
        
        
    };
    componentDidUpdate() {
        if (this.state.options.length !== 0) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
    };
    componentWillUnmount() {
        console.log('componentWillUnmount')
    // handlePick - pass down to Action and setup onClick- bind here
    //  randomly pick an option and alert it.
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                <Action hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <div className="widget">
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}
                />
                </div>
                </div>
               
                <OptionModal 
                selectedOption={this.state.selectedOption}
                deleteSelectedOption={this.deleteSelectedOption}
                />
            </div>
        )
    };

}
