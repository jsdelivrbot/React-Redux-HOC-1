import React from 'react';
import {Link } from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  authButton(){
    if (this.props.loggedIn) {
      return <button onClick={() => this.props.authenticate(false)} className='btn btn-primary'>Sign Out</button>
    }
    return <button onClick={() => this.props.authenticate(true)} className='btn btn-primary'>Sign In</button>
  }
  render() {
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/resources'>Resources</Link>
          </li>
          <li className='nav-item'>
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth
  }
}
export default connect(mapStateToProps, actions)(Header);
