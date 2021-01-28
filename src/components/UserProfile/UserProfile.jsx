import React from 'react';
import UserProfileInfoContainer from "./UserProfileInfo/UserProfileInfoContainer";
import UserProfilePostsContainer from "./UserProfilePosts/UserProfilePostsContainer";
import NewPostContainer from "../NewPost/NewPostContainer";
import {withRouter} from "react-router";


const UserProfile = (props) => {
    console.log(props.match.params.id)
    return (
        <>
            <UserProfileInfoContainer/>
            <NewPostContainer/>
            <UserProfilePostsContainer/>
        </>
    );
};

const UserProfileWithUrlData = withRouter(UserProfile)

export default UserProfileWithUrlData;
