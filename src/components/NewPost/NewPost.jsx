import styles from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <div className={styles.new_post_block}>
            <div>
				<textarea
                    name='newPost'
                    title='Поле для ввода текста поста'
                    placeholder='О чём вы думаете?'
                    id='0'
                    cols='120'
                    rows='3'
                    value={props.postText}
                    onChange={props.addPostTextChange}
                    className={styles.new_post_input}
                />
            </div>
            <div className={styles.add_post_btn}>
                <button className={styles.add_post_btn} onClick={props.addPost}>
                    Добавить пост
                </button>
            </div>
        </div>
    );
};

export default NewPost;
