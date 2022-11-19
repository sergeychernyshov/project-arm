import React, { Component } from 'react';

import Input from '../../common/Input';
import Button from '../../common/Button';

import './payroll-form.css';

class PayrollForm extends Component {
    initialState = {
        data: {
            first_name: '',
            last_name: '',
            wages: '',
            date: this.props.date,
            note: ''
        },
        errorList: {}
    };

    state = this.initialState;

    componentDidMount() {
        if (this.props.payroll) {
            this.setState({data: { ...this.props.payroll }});
        }
    }

    _handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    _handleSubmit = (event) => {
        event.preventDefault();

        if (this._handleSubmitValidate()) {
            this.props.handler(this.state.data);
        }
    };

    _handleSubmitValidate = () => {
        const {
            first_name,
            last_name,
            wages
        } = this.state.data;

        const messageRequired = 'Обязательно';

        const errorListSubmit = {};

        if (!first_name) {
            errorListSubmit.first_name = messageRequired;
        }
        
        if (!last_name) {
            errorListSubmit.last_name = messageRequired;
        }

        if (!wages) {
            errorListSubmit.wages = messageRequired;
        }

        this.setState({
            errorList: errorListSubmit
        });

        const result = (Object.keys(errorListSubmit).length === 0)

        return result;
    };

    _renderSubmitValue = (loading, error) => {
        let result;

        if (error) {
            result = 'Ошибка!';
        } else if (loading) {
            result = 'Загрузка...';
        } else {
            result = 'Сохранить';
        }

        return result;
    }

    render() {
        const {
            data: {
                first_name,
                last_name,
                wages,
                note
            }
        } = this.state;

        const { loading, error } = this.props;

        return (
            <form className="payroll_form" onSubmit={this._handleSubmit}>
                <Input
                    type='text'
                    name='first_name'
                    label='Имя'
                    value={first_name}
                    handleChange={this._handleChange}
                    error={this.state.errorList.first_name}
                />

                <Input
                    type='text'
                    name='last_name'
                    label='Фамилия'
                    value={last_name}
                    handleChange={this._handleChange}
                    error={this.state.errorList.last_name}
                />

                <Input
                    type='text'
                    name='wages'
                    label='Зарплата'
                    value={wages}
                    handleChange={this._handleChange}
                    error={this.state.errorList.wages}
                />

                <div>
                    <label htmlFor="note">Примечание</label>
                    <textarea onChange={this._handleChange} value={note} className="payroll_form__textarea" id="note" name="note" rows="2"></textarea>
                </div>

                <Button
                    value={this._renderSubmitValue(loading, error)}
                />
            </form>
        );
    }
}

export default PayrollForm;