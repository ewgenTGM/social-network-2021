import React from 'react';
import UserProfileInfo from './UserProfileInfo/UserProfileInfo';
import UserProfilePosts from './UserProfilePosts/UserProfilePosts';


const UserProfile = () => {
    return (
        <>
            <UserProfileInfo/>
            <UserProfilePosts/>
        </>
    );
};

export default UserProfile;
