import React from 'react';

import axios from 'axios';

import FormInput from "../form-input/form-input.component";
import './custom-cipher.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import InfoDropdown from "../info-dropdown/info-dropdown.component";

class CustomCipher extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
    }

        initialState = {
            key: '',
            message: '',
            password: ''
        }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    submitCipher = event => {
        event.preventDefault()

        const inMessage = {
            key: this.state.key,
            message: this.state.message
        };

        axios.post(this.props.url, inMessage)
            .then(response => {
                if(response.data != null) {
                    this.setState({
                        password: response.data.password
                    });
                }
            });
    };

    resetAll = event => {
        event.preventDefault();
        this.setState(this.initialState);
    };

    handleInfo = event => {
        event.preventDefault();
        this.setState({'show' : !this.state.show});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitCipher}>
                    <FormInput
                        name='key'
                        type='key'
                        value={this.state.key}
                        handleChange={this.handleChange}
                        label='key'
                        required
                    />
                    <FormInput
                        name='message'
                        type='message'
                        value={this.state.message}
                        handleChange={this.handleChange}
                        label='message'
                        required
                    />
                    <div>
                        <CustomButton type='submit'> ENCRYPT! </CustomButton>
                        <CustomButton onClick={this.resetAll}> RESET </CustomButton>
                        <CustomButton onClick={this.handleInfo}> INFO </CustomButton>
                    </div>
                </form>
                <div>
                    <label>PASSWORD: {this.state.password}</label>
                </div>
                <div style={{'display': this.state.show ? 'block' : 'none'}}>
                    <InfoDropdown show={this.state.show} text={this.props.text}/>
                </div>
            </div>
        )
    }
}

export default CustomCipher;
