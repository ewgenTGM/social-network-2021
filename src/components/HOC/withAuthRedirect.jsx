import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to='loginForm'/>
        }
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(RedirectComponent);
}

const mapStateToProps = (store) => {
    return {
        isAuth: store.auth.isAuth,
    }
}

export default withAuthRedirect;