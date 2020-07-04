import React from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component";
import axios from 'axios'
import InfoDropdown from "../info-dropdown/info-dropdown.component";

class MorsCipher extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        }

        initialState = {
            message: '',
            password: ''
        }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    };

    submitCipher = event => {
        event.preventDefault()

        const inMessage = {
            message: this.state.message
        };

        axios.post('http://localhost:8080/mors', inMessage)
            .then(response => {
                if(response.data != null) {
                    this.setState({
                        password: response.data.password
                    });
                }
            });
    };

    resetMessage = event => {
        event.preventDefault();
        this.setState(this.initialState);
    };

    handleInfo = event => {
        event.preventDefault();
        this.setState({'show': !this.state.show})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitCipher}>
                    <FormInput
                        name='message'
                        type='message'
                        value={this.state.message}
                        handleChange={this.handleChange}
                        label='message'
                        requierd
                    />
                    <div>
                        <CustomButton type='submit'> ENCRYPT! </CustomButton>
                        <CustomButton onClick={this.resetMessage}> RESET </CustomButton>
                        <CustomButton onClick={this.handleInfo}> INFO </CustomButton>
                    </div>
                </form>
                <div>
                    <label>PASSWORD: {this.state.password}</label>
                </div>
                <div style={{'display': this.state.show ? 'block' : 'none'}}>
                    <InfoDropdown show={this.state.show} text={this.props.text} instruction={this.props.instruction}/>
                </div>
            </div>
        )
    }
}

export default MorsCipher;
