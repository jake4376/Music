import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';

import authAction from '../../redux/auth/actions';

import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';

const { login } = authAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    email: '',
    pw: '',
    fullset: false
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handleInput = (e, type) => {
    this.setState({fullset: false})
    if ( type === "email" ) {
      this.setState({email: e.target.value});
    }
    if ( type === "password" ) {
      this.setState({pw: e.target.value});
    }
  }

  handleLogin = () => {
    const { login } = this.props;
    const {email, pw} = this.state;
    if ( !!email && !!pw ) {
      login(email, pw);
    } else {
      this.setState({fullset: true});
    }
  };
  render() {
    const from = { pathname: '/dashboard' };
    const { fullset } = this.state;
    const { isLoggedIn } = this.props;
    if ( isLoggedIn ) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              {
                fullset && <span style={{color: "red"}}>Your account or password is incorrect</span>
              }
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Email" onChange={e => this.handleInput(e, "email")} />
              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Password" onChange={e => this.handleInput(e, "password")} />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
  }),
  { login }
)(SignIn);
