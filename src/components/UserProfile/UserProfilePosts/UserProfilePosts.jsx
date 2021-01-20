import React from 'react';
import styles from './UserProfilePosts.module.css';
import PostContainer from "../../Post/PostContainer";
import NewPostContainer from "../../NewPost/NewPostContainer";


const UserProfilePosts = (props) => {
    const posts = props.posts.postItems.reverse().map(post => <PostContainer id={post.id}
                                                                    key={post.id}
                                                                    message={post.message}
                                                                    likes={post.likes}
                                                                    dislikes={post.dislikes}
                                                                    dispatch={props.dispatch}
    />);
    return (
        <div className={styles.posts_block}>
            <h3 className={styles.my_posts_title}>Мои посты:</h3>
            <NewPostContainer dispatch={props.dispatch}/>
            {posts}
        </div>
    );
};

export default UserProfilePosts;