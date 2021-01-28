import React from 'react';
import Post from "../../Post/Post";


const UserProfilePosts = (props) => {
    const posts = props.posts.map(post => <Post
        post={post}
        key={post.id}
        addLike={props.addLike}
        addDislike={props.addDislike}
    />);
    return (
        <>
            {posts}
        </>
    );
};

export default UserProfilePosts;
