import {connect} from "react-redux";
import UserProfilePosts from "./UserProfilePosts";
import {addDislikeAC, addLikeAC} from "../../../redux/profile-reducer";

const mapStateToProps = (store) => {
    return {
        posts: store.userProfilePage.userPosts.postItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: (id)=> dispatch(addLikeAC(id)),
        addDislike: (id)=> dispatch(addDislikeAC(id))
    }
}

const UserProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfilePosts);
export default UserProfilePostsContainer;
