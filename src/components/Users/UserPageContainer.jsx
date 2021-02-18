import { connect } from "react-redux";
import { UserPage } from "./UserPage";
import { withRouter } from "react-router-dom";
import { setUserInfo } from "../../redux/redux-ts/user-page-reducer-ts";

const mapStateToProps = ( state ) => {
    return {
        userInfo: state.userPage.userInfo,
        isFetching: state.userPage.isFetching
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        setUserInfo: id => dispatch( setUserInfo( id ) )
    }
}


export default connect( mapStateToProps, mapDispatchToProps )( withRouter( UserPage ) );