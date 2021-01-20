import React, {useState} from 'react';
import {addPostAC} from "../../redux/profile-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostAC(postText));
        setPostText('');
    };

    let addPostTextChange = (event) => {
        setPostText(event.target.value);
    };
    const [postText, setPostText] = useState('');
    return (
        <NewPost postText={postText}
                 setPostText={setPostText}
                 addPostTextChange={addPostTextChange}
                 addPost={addPost}/>
    );
};

export default NewPostContainer;
