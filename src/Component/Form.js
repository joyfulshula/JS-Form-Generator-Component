import React, { Component } from 'react';
import FormGenerator from './FormGenerator'

class Form extends Component {
    state = {
        text: '',
        date: '',
        number: ''

    }
    form_data = [
        {
            label: 'What is the name of the officer in question?',
            type: 'text',
        },
        {
            label: 'When was the date of the incident?',
            type: 'date',
        },
        {
            label: 'How much is the bribe that was paid? (optional)',
            type: 'number',
        },
    ];

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handleSubmission = (evt) => {
        evt.preventDefault();
        alert(`the name of the officer in question is ${this.state.text}, the date of the incident is ${this.state.date} and the bribe paid was ${this.state.number ? this.state.number : '0'}`)
    }


    render() {

        return (
            <div className="Form">
                <FormGenerator form={this.form_data} submit={this.handleSubmission} handleChange={this.handleChange} />
            </div>
        );
    }
}

export default Form;
