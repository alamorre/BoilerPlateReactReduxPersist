import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Checkbox } from 'antd';

import { loginAuth, logoutAuth } from '../../actions/account';

class HomePage extends Component {
    state = {
        checked: false
    }
    
    onCheck() { 
        if(this.props.account.authenticated){
            this.props.logoutAuth(); 
        } else {
            this.props.loginAuth(); 
        }
    }

    render() {
        return(
            <Checkbox checked={this.props.account.authenticated} onClick={this.onCheck.bind(this)}>
                Log me in!
            </Checkbox>
        )
    }
}

function mapStateToProps(state){
    return { account: state.account };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ loginAuth, logoutAuth }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);