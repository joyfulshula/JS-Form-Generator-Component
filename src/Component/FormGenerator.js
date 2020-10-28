import React, { Component } from 'react';

class FormGenerator extends Component {
    state = {
        form_type: this.props.form
    }
    render() {
        console.log(this.state.form_type)
        return (
            <div className="form_generator">
                <h2>Police Brutality Report Form</h2>
                <form onSubmit={this.props.submit}>

                    {
                        this.state.form_type ?
                            this.state.form_type.map((item) => {
                                return (
                                    <div className='input_container'>
                                        <label htmlFor={item.type}>{item.label}</label>
                                        <input id={item.type} name={item.type} type={item.type} onChange={this.props.handleChange} />
                                    </div>
                                )
                            }) :
                            <h2>no data</h2>
                    }
                    <div className='btn'>
                        <button>Submit</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default FormGenerator;
