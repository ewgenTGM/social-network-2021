import { connect } from "react-redux";
import { UserProfilePosts } from "./UserProfilePosts";
import { addDislikeAC, addLikeAC, removePostAC } from "../../../redux/redux-ts/profile-reducer-ts";

const mapStateToProps = ( store ) => {
    return {
        posts: store.userProfilePage.userPosts,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addLike: ( id ) => dispatch( addLikeAC( id ) ),
        addDislike: ( id ) => dispatch( addDislikeAC( id ) ),
        removePost: ( id ) => dispatch( removePostAC( id ) )
    }
}

const UserProfilePostsContainer = connect( mapStateToProps, mapDispatchToProps )( UserProfilePosts );
export default UserProfilePostsContainer;
