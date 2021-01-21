import React from 'react';
import UserProfileInfoContainer from "./UserProfileInfo/UserProfileInfoContainer";
import UserProfilePostsContainer from "./UserProfilePosts/UserProfilePostsContainer";


const UserProfile = () => {
    return (
        <>
            <UserProfileInfoContainer/>
            <UserProfilePostsContainer/>
        </>
    );
};

export default UserProfile;
