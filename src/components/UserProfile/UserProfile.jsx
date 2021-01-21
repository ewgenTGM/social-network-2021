import React from 'react';
import UserProfileInfoContainer from "./UserProfileInfo/UserProfileInfoContainer";
import UserProfilePostsContainer from "./UserProfilePosts/UserProfilePostsContainer";
import NewPostContainer from "../NewPost/NewPostContainer";


const UserProfile = () => {
    return (
        <>
            <UserProfileInfoContainer/>
            <NewPostContainer/>
            <UserProfilePostsContainer/>
        </>
    );
};

export default UserProfile;
