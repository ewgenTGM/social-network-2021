import React from 'react';
import {Redirect} from 'react-router-dom';
// import {connect} from "react-redux";

// const mapStateToProps = (state) => {
//     return {
//         isAuth: state.isAuth
//     }
// }

const withAuthRedirect = Component => props => {
    return <Redirect to='loginPage'/>
}


// return connect(mapStateToProps)(RedirectComponent);


export default withAuthRedirect;