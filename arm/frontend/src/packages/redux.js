import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import authReducer from '../components/Auth/auth-reducer';
import userFormReducer from '../components/User/UserForm/user-form-reducer';
import userListReducer from '../components/User/UserList/user-list-reducer';
import modalReducer from '../components/common/Modal/modal-reducer';
import orderFormReducer from '../components/Order/OrderForm/order-form-reducer';
import orderFormSelectManagerReducer from '../components/Order/OrderFormSelectManager/order-form-select-manager-reducer';
import orderListReducer from '../components/Order/OrderList/order-list-reducer';
import orderFilterReducer from '../components/Order/OrderFilter/order-filter-reducer';
import wagesListReducer from '../components/Wages/WagesList/wages-list-reducer';
import wagesFilterReducer from '../components/Wages/WagesFilter/wages-filter-reducer';
import payrollFormReducer from '../components/Payroll/PayrollForm/payroll-form-reducer';
import payrollListReducer from '../components/Payroll/PayrollList/payroll-list-reducer';
import payrollFilterReducer from '../components/Payroll/PayrollFilter/payroll-filter-reducer';

const reducer = combineReducers({
    auth: authReducer,
    userForm: userFormReducer,
    userList: userListReducer,
    modal: modalReducer,
    orderForm: orderFormReducer,
    orderFormSelectManager: orderFormSelectManagerReducer,
    orderList: orderListReducer,
    orderFilter: orderFilterReducer,
    wagesList: wagesListReducer,
    wagesFilter: wagesFilterReducer,
    payrollForm: payrollFormReducer,
    payrollList: payrollListReducer,
    payrollFilter: payrollFilterReducer
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));