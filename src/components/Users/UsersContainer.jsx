import {
    followAC, setCurrentPageAC,
    setUsers,
    unfollowAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: pageNumber => dispatch(setUsers(pageNumber)),
        follow: id => dispatch(followAC(id)),
        unfollow: id => dispatch(unfollowAC(id)),
        setCurrentPage: pageNumber =>dispatch(setCurrentPageAC(pageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);