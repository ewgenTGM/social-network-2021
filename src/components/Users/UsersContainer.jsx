import {
    followAC,
    setCurrentPageAC,
    setPageCountAC, setTotalUsersCountAC,
    setUsersAC,
    setUsersPerPageAC,
    unfollowAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        pageCount: state.usersPage.pageCount,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        setUsersPerPage: (usersCount) => dispatch(setUsersPerPageAC(usersCount)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setPageCount: (pageCount) => dispatch(setPageCountAC(pageCount)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        follow: (id) => dispatch(followAC(id)),
        unfollow: (id) => dispatch(unfollowAC(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);