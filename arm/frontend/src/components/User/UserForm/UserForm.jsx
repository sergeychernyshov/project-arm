import React, { Component } from 'react';

import Input from '../../common/Input';

import './user-form.css';

class UserForm extends Component {
    initialState = {
        data: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            role: 'manager'
        },
        errorList: {}
    };

    state = this.initialState;

    componentDidMount() {
        if (this.props.user) {
            this.setState({data: {...this.props.user, password: ''}});
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidateSubmit()) {
            const data = Object.assign(this.state.data);

            if (!this.state.data.password) {
                delete data.password;
            }
            this.props.handler(data);
        }
    };

    handleValidateSubmit = () => {
        const {
            first_name,
            last_name,
            email,
            password,
            role
        } = this.state.data;

        const messageRequired = 'Обязательно';

        const errorListSubmit = {};

        if (!first_name) {
            errorListSubmit.first_name = messageRequired;
        }
        
        if (!last_name) {
            errorListSubmit.last_name = messageRequired;
        }

        if (!email) {
            errorListSubmit.email = messageRequired;
        }

        if (!password && !this.props.user) {
            errorListSubmit.password = messageRequired;
        }

        if (!role) {
            errorListSubmit.role = messageRequired;
        }

        this.setState({
            errorList: errorListSubmit
        });

        const result = (Object.keys(errorListSubmit).length === 0)

        return result;
    };

    render() {
        const {
            data: {
                first_name,
                last_name,
                email,
                role
            }
        } = this.state;

        const { loading, error } = this.props;

        let renderSubmitValue;

        if (error) {
            renderSubmitValue = 'Ошибка!';
        } else if (loading) {
            renderSubmitValue = 'Загрузка...';
        } else {
            renderSubmitValue = 'Сохранить';
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    type='text'
                    name='first_name'
                    label='Имя'
                    value={first_name}
                    handleChange={this.handleChange}
                    error={this.state.errorList.first_name}
                />

                <Input
                    type='text'
                    name='last_name'
                    label='Фамилия'
                    value={last_name}
                    handleChange={this.handleChange}
                    error={this.state.errorList.last_name}
                />

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
                    handleChange={this.handleChange}
                    error={this.state.errorList.password}
                />

                <label htmlFor="role">Роль</label>
                <select onChange={this.handleChange} value={role} className="user_form__input" id="role" name="role">
                    <option value="manager">Менеджер</option>
                    <option value="admin">Администратор</option>
                </select>
        
                <input className="user_form__input user_form__button" type="submit" value={renderSubmitValue} />
            </form>
        );
    }
}

export default UserForm;