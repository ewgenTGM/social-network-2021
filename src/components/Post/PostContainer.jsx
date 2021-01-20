import React from 'react';
import {addDislikeAC, addLikeAC} from "../../redux/profile-reducer";
import Post from "./Post";


const PostContainer = (props) => {
    const {id, message, likes, dislikes} = props;

    const addLike = () => props.dispatch(addLikeAC(id));

    const addDislike = () => props.dispatch(addDislikeAC(id));

    return (
        <Post addLike={addLike}
                       addDislike={addDislike}
                       id={id}
                       message={message}
                       likes={likes}
                       dislikes={dislikes}/>
    );
};

export default PostContainer;
