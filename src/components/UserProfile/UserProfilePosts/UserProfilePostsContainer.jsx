import {connect} from "react-redux";
import UserProfilePosts from "./UserProfilePosts";

const mapStateToProps = (store) => {
    return {
        posts: store.userProfilePage.userPosts.postItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const UserProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfilePosts);
export default UserProfilePostsContainer;
