import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends Component {
    state = {
        menu: false
    };

    componentDidMount() {
        document.addEventListener('click', event => {
            if (event.target.id === 'header__dropdown_label') {
                this.handleMenu();
            } else if (this.state.menu) {
                this.handleMenu();
            }
        })
    }

    handleLogout = () => {
        this.props.handleLogout();
    };

    handleMenu = () => {
        this.setState(({ menu }) => ({menu: !menu}));
    };

    render() {

        const {
            token,
            first_name,
            last_name,
            role,
            email
        } = this.props;

        let headerDropdownMenuClassName = 'header__dropdown_menu';

        if (this.state.menu) {
            headerDropdownMenuClassName += ' header__dropdown_menu_open';
        }
    
        const renderMenu = (
            <div className="header__dropdown">
                <Link id="header__dropdown_label" to="#">{last_name} {first_name}</Link>
                <ul className={headerDropdownMenuClassName}>
                    {(token) && <li><Link to="#" onClick={this.handleLogout}>Выход</Link></li>}
                </ul>
            </div>
        );

        return (
            <header>
                <div className="_container">
                    <div className="header__layout">
                        <div className="header__logo">
                            <Link to="/">СТРЕЛА</Link>
                        </div>

                        <div className="header__menu">
                            <div className="header__horizontal_menu">
                                {(role === 'admin') && <Link to="/payrolls">Расчётные листы</Link>}
                                {(role === 'admin') && <Link to="/wages">Зарплаты</Link>}
                                {(role === 'admin') && <Link to="/users">Пользователи</Link>}
                            </div>

                            {renderMenu}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;