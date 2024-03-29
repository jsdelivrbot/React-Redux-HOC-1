import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
export default function(ComposedComponent) {
  class Auth extends React.Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    componentWillMount() {
      if (!this.props.isLoggedIn) {
          this.context.router.push('/')
      }
    }
    componentWillUpdate(nextProps,) {
      if (!nextProps.isLoggedIn) {
        this.context.router.push('/')
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {isLoggedIn: state.auth}
  }

  return connect(mapStateToProps)(Auth);
}
