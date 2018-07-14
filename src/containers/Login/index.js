import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from 'components/Login';

import { login } from 'actions';

const mapStateToProps = state => ({
  loginFormData: state.loginReducer
});

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data))
});

type Props = {
  login: Function
};

class LoginContainer extends Component<Props> {
  login = (values) => this.props.login(values);

  render() {
    return (
      <Login {...this.props} onSubmit={this.login}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);