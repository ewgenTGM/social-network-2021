import React from 'react';
import classes from './Post.module.css';
import likeIcon from '../../like.svg';
import dislikeIcon from '../../dislike.svg';


const Post = (props) => {
    const {id, message, likes, dislikes} = props;

    return (
        <div className={classes.post}>
            <div className={classes.post_id}>{id}</div>
            <div className={classes.post_content}>{message}</div>
            <div className={classes.post_likes}>
                <div className={classes.post_like}>
                    <img
                        src={likeIcon}
                        alt='like'
                        onClick={props.addLike}/>
                    <span>{likes}</span>
                </div>
                <div className={classes.post_dislike}>
                    <img
                        src={dislikeIcon}
                        alt='dislike'
                        onClick={props.addDislike}
                    />
                    <span>{dislikes}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
