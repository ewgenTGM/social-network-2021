import React from 'react';
import UserProfileInfoContainer from "./UserProfileInfo/UserProfileInfoContainer";
import UserProfilePostsContainer from "./UserProfilePosts/UserProfilePostsContainer";
import NewPostContainer from "../NewPost/NewPostContainer";
import {withRouter} from "react-router-dom";


const UserProfile = () => {
    return (
        <>
            <UserProfileInfoContainer/>
            {/*<NewPostContainer/>*/}
            <UserProfilePostsContainer/>
        </>
    );
};

const UserProfileWithUrlData = withRouter(UserProfile)

export default UserProfileWithUrlData;
