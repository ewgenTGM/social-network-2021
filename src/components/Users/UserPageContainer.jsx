import {setUserInfo} from "../../redux/user-page-reducer";
import {connect} from "react-redux";
import UserPage from "./UserPage";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        userInfo: state.userPage.userInfo,
        isFetching: state.userPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: id => dispatch(setUserInfo(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserPage));