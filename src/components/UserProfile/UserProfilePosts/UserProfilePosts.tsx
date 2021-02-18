import React from 'react';
import { UserPostType } from '../../../redux/redux-ts/profile-reducer-ts';
import { Post } from '../../Post/Post';

type PropsType = {
  posts: Array<UserPostType>
  addLike: ( postId: string ) => void
  addDislike: ( postId: string ) => void
  removePost: ( postId: string ) => void
}

export const UserProfilePosts = ( props: PropsType ) => {
  const posts = props.posts.map( post => <Post
      post={ post }
      key={ post.id }
      addLike={ props.addLike }
      addDislike={ props.addDislike }
      removePost={ props.removePost }
  /> );
  return (
      <>
        { posts }
      </>
  );
};