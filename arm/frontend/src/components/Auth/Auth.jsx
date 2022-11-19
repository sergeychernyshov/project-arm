import React, { Component } from 'react';

import Input from '../common/Input';

import './auth.css';

class Auth extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        errorList: {}
    };

    handleChange = (event) => {
        const { name, value } = event.target
        
        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidateSubmit()) {
            this.props.handleSubmit(this.state.data);
        }
    };

    handleValidateSubmit = () => {
        const {
            email,
            password
        } = this.state.data;

        const messageRequired = 'Обязательно';

        const errorListSubmit = {};

        if (!email) {
            errorListSubmit.email = messageRequired;
        }

        if (!password) {
            errorListSubmit.password = messageRequired;
        }

        this.setState({
            errorList: errorListSubmit
        });

        const result = !!(Object.keys(errorListSubmit).length === 0)

        return result;
    };

    render() {
        const {
            email,
            password
        } = this.state;

        const { error } = this.props;

        return (
            <div className="login">
                {
                    error &&
                        <h3 className="login__message">
                            {error.response.data.message}
                        </h3>
                }

                <form onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        name='email'
                        label='Эл. почта'
                        value={email}
                        handleChange={this.handleChange}
                        error={this.state.errorList.email}
                    />

                    <Input
                        type='password'
                        name='password'
                        label='Пароль'
                        value={password}
                        handleChange={this.handleChange}
                        error={this.state.errorList.password}
                    />

                    <input className="login__input login__button" type="submit" value="Вход" />
                </form>
            </div>
        );
    }
}

export default Auth;