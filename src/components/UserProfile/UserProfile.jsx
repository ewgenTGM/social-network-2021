import React from 'react';
import UserProfileInfoContainer from "./UserProfileInfo/UserProfileInfoContainer";
import UserProfilePostsContainer from "./UserProfilePosts/UserProfilePostsContainer";
import NewPostContainer from "../NewPost/NewPostContainer";
import { withRouter } from "react-router-dom";

const _UserProfile = () => {
    return (
        <>
            <UserProfileInfoContainer/>
            <NewPostContainer/>
            <UserProfilePostsContainer/>
        </>
    );
};

export const UserProfile = withRouter( _UserProfile );