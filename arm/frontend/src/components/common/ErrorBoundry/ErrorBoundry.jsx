import React, { Component } from 'react';

import Info from '../Info';

class ErrorBoundry extends Component {
    state = { hasError: false };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <Info
                type='error'
            />;
        }

        return this.props.children;
    }
}

export default ErrorBoundry;