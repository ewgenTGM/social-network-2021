import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        follow: (id) => dispatch(followAC(id)),
        unfollow: (id) => dispatch(unfollowAC(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);