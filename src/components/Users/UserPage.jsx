import React, {useEffect} from 'react'
import Spinner from "../Spinner/Spinner";
import styles from './UserPage.module.css'

const UserPage = (props) => {
    useEffect(() => {
        props.setUserInfo(props.match.params.id);
    }, []);

    const content = (
        <div className={styles.userPage}>
            <img
                src={props.userInfo.photos.large}
                className={styles.avatar_large}
                alt=""/>
            <div className={styles.user_page_info}>
                <h2>{props.userInfo.fullName}</h2>
                <p>Id: {props.userInfo.userId}</p>
                <p>Обо мне: {props.userInfo.aboutMe ? props.userInfo.aboutMe : 'Здесь пока пусто....'}</p>
                <p>Контакты:</p>
                <ul>
                    <li>facebook: {props.userInfo.contacts.facebook ? props.contacts.facebook : 'Не известно'}</li>
                    <li>website: {props.userInfo.contacts.website ? props.contacts.website : 'Не известно'}</li>
                    <li>vk: {props.userInfo.contacts.vk ? props.contacts.vk : 'Не известно'}</li>
                    <li>twitter: {props.userInfo.contacts.twitter ? props.contacts.twitter : 'Не известно'}</li>
                    <li>instagram: {props.userInfo.contacts.instagram ? props.contacts.instagram : 'Не известно'}</li>
                    <li>youtube: {props.userInfo.contacts.youtube ? props.contacts.youtube : 'Не известно'}</li>
                    <li>github: {props.userInfo.contacts.github ? props.contacts.github : 'Не известно'}</li>
                    <li>mainLink:{props.userInfo.contacts.mainLink ? props.contacts.mainLink : 'Не известно'}</li>
                </ul>
                <p>Ищет работу?: {props.userInfo.lookingForAJob ? 'да' : 'нет'}</p>
            </div>
        </div>
    );

    return (
        <>
            {props.isFetching ? <Spinner/> : content}
        </>
    )
}


export default UserPage;