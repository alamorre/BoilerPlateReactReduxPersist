import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Checkbox } from 'antd'

class HomePage extends Component {
    state = {
        checked: false
    }
    
    onCheck() {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return(
            <Checkbox onClick={this.onCheck.bind(this)}>
                This is the home page.
            </Checkbox>
        )
    }
}

export default HomePage;