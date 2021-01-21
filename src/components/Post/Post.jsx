import React from 'react';
import classes from './Post.module.css';
import likeIcon from '../../like.svg';
import dislikeIcon from '../../dislike.svg';


const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post_id}>{props.post.id}</div>
            <div className={classes.post_content}>{props.post.message}</div>
            <div className={classes.post_likes}>
                <div className={classes.post_like}>
                    <img
                        src={likeIcon}
                        alt='like'
                        onClick={() => props.addLike(props.post.id)}/>
                    <span>{props.post.likes}</span>
                </div>
                <div className={classes.post_dislike}>
                    <img
                        src={dislikeIcon}
                        alt='dislike'
                        onClick={() => props.addDislike(props.post.id)}
                    />
                    <span>{props.post.dislikes}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
