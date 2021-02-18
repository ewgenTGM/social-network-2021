import React, { ChangeEvent, useState } from 'react';
import styles from './NewPost.module.css';

type PropsType = {
  addPost: ( text: string ) => void
}

export const NewPost = ( props: PropsType ) => {
  const [ postText, setPostText ] = useState<string>( '' );
  const addPost = () => {
    props.addPost( postText );
    setPostText( '' );
  };

  return (
      <div className={ styles.new_post_block }>
        <div>
				<textarea
            name='newPost'
            title='Поле для ввода текста поста'
            placeholder='О чём вы думаете?'
            id='0'
            cols={ 120 }
            rows={ 3 }
            value={ postText }
            onChange={ ( e: ChangeEvent<HTMLTextAreaElement> ) => setPostText( e.currentTarget.value ) }
            className={ styles.new_post_input }
        />
        </div>
        <div className={ styles.add_post_btn }>
          <button
              className={ styles.add_post_btn }
              onClick={ addPost }>
            Добавить пост
          </button>
        </div>
      </div>
  );
};
