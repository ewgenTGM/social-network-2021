import React from 'react';
import styles from './UserProfileInfo.module.css';
import avatar from '../../../avatar_sm.jpg';

type UserProfileInfoPropsType = {
  userInfo: {
    name: string
    born: string
    city: string
    edu: string
    site: string
  }

}
export const UserProfileInfo = ( props: UserProfileInfoPropsType ) => {
  const { name, born, city, edu, site } = props.userInfo;
  return (
      <>
        <div className={ styles.user_profile_bg }>
          <img
              src='https://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg'
              alt='backGround'
          />
        </div>
        <div className={ styles.user_profile_info }>
          <div className={ styles.user_profile_avatar }>
            <img
                src={ avatar }
                alt='userPhoto'/>
          </div>
          <div className={ styles.user_info }>
            <div>
              <span>Имя:</span>
              { name }
            </div>
            <div>
              <span>Дата рождения:</span>
              { born }
            </div>
            <div>
              <span>Город:</span>
              { city }
            </div>
            <div>
              <span>Образование:</span>
              { edu }
            </div>
            <div>
              <span>Веб-сайт:</span>
              <a href='https://www.vk.com'>{ site }</a>
            </div>
          </div>
        </div>
      </>
  );
};