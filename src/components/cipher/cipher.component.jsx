import React from 'react';

import axios from 'axios';

import FormInput from "../form-input/form-input.component";
import './cipher.styles.scss'
import Button from "../button/button.component";
import InfoDropdown from "../info-dropdown/info-dropdown.component";

const initialState = {
    key: '',
    message: '',
    password: '',
    show: false
}

class Cipher extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = event => {
        if (event.target.value) {
            this.setState({[event.target.name]: event.target.value})
        } else {
            alert('problem z nullem')
        }
    }

    submitCipher = event => {
        event.preventDefault()

        const inMessage = {
            key: this.state.key,
            message: this.state.message
        };

        axios.post(this.props.url, inMessage)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        password: response.data.password
                    });
                }
            }).catch((error) => {
                console.error('Error - ' + error);
        });
    };

    resetAll = event => {
        event.preventDefault();
        this.setState(initialState);
    };

    handleInfo = event => {
        event.preventDefault();
        this.setState({'show': !this.state.show});
    }

    render() {
        return (
            <div className='cipher-body'>
                <form onSubmit={this.submitCipher}>
                    {this.props.cipher !== 'mors' ?
                        <FormInput
                            name='key'
                            type='key'
                            value={this.state.key}
                            handleChange={this.handleChange}
                            label='key'
                            required
                        />
                        : null}
                    <FormInput
                        name='message'
                        type='message'
                        value={this.state.message}
                        handleChange={this.handleChange}
                        label='message'
                        required
                    />
                    <div className='button-group'>
                        <Button className='custom-button' type='submit'> ENCRYPT! </Button>
                        <Button className='custom-button' onClick={this.resetAll}> RESET </Button>
                        <Button className='custom-button' onClick={this.handleInfo}> INFO </Button>
                    </div>
                </form>
                <>
                    <label>PASSWORD: {this.state.password}</label>
                </>
                <div style={{'display': this.state.show ? 'block' : 'none'}}>
                    <InfoDropdown show={this.state.show} text={this.props.text} instruction={this.props.instruction}/>
                </div>
            </div>
        )
    }
}

export default Cipher;
