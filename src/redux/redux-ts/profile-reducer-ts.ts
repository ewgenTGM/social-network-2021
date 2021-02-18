import { v1 } from 'uuid';

const ADD_POST = 'ADD_POST',
    REMOVE_POST = 'REMOVE_POST',
    ADD_DISLIKE = 'ADD_DISLIKE',
    ADD_LIKE = 'ADD_LIKE';

type AddPostActionType = {
  type: typeof ADD_POST
  payload: string
}
type RemovePostActionType = {
  type: typeof REMOVE_POST
  payload: string
}
type AddLikeActionType = {
  type: typeof ADD_LIKE
  payload: string
}
type AddDislikeActionType = {
  type: typeof ADD_DISLIKE
  payload: string
}

export type UserProfileReducerActionType = AddPostActionType | RemovePostActionType | AddLikeActionType | AddDislikeActionType;
export const addPostAC = ( text: string ): AddPostActionType => {
  return { type: ADD_POST, payload: text };
};

export const removePostAC = ( postId: string ): RemovePostActionType => {
  return { type: REMOVE_POST, payload: postId };
};

export const addDislikeAC = ( postId: string ): AddDislikeActionType => {
  return { type: ADD_DISLIKE, payload: postId };
};

export const addLikeAC = ( postId: string ): AddLikeActionType => {
  return { type: ADD_LIKE, payload: postId };
};

type UserInfoType = {
  name: string
  born: string
  city: string
  edu: string
  site: string
}

type UserPostType = {
  id: string
  message: string
  likes: number
  dislikes: number
}

export type UserProfileStateType = {
  userInfo: UserInfoType
  userPosts: Array<UserPostType>
}

const initialState: UserProfileStateType = {
  userInfo: {
    name: 'Евгений',
    born: '21.08.1985',
    city: 'Мозырь',
    edu: 'МГПУ',
    site: 'мойсайт.бел'
  },
  userPosts: [
    {
      id: '0',
      message:
          'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.',
      likes: 4,
      dislikes: 2
    },
    {
      id: '1',
      message:
          'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании модели развития. С другой стороны сложившаяся структура организации требуют от нас анализа дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.!',
      likes: 41,
      dislikes: 3
    },
    {
      id: '2',
      message:
          'Товарищи! сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров в значительной степени обуславливает создание новых предложений. Таким образом сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке новых предложений.!',
      likes: 42,
      dislikes: 48
    },
    {
      id: '3',
      message:
          'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации дальнейших направлений развития.',
      likes: 0,
      dislikes: 0
    }
  ]
};

export const profileReducerTs = ( state: UserProfileStateType = initialState, action: UserProfileReducerActionType ): UserProfileStateType => {

  switch ( action.type ) {

    case ADD_POST: {
      if ( action.payload.trim() === '' ) {
        return state;
      }
      const newPost: UserPostType = {
        id: v1(),
        message: action.payload,
        dislikes: 100,
        likes: 100
      };
      return {
        ...state,
        userPosts: [ newPost, ...state.userPosts ]
      };
    }

    case REMOVE_POST: {
      return {
        ...state,
        userPosts: state.userPosts.filter( post => post.id !== action.payload )
      };
    }

    case ADD_LIKE: {
      const newState: UserProfileStateType = {
        ...state,
        userPosts: state.userPosts.map( post => ( { ...post } ) )
      };
      const post = newState.userPosts.find( post => post.id === action.payload );
      post && post.likes++;
      return newState;
    }

    case
    ADD_DISLIKE: {
      const newState: UserProfileStateType = {
        ...state,
        userPosts: state.userPosts.map( post => ( { ...post } ) )
      };
      const post = newState.userPosts.find( post => post.id === action.payload );
      post && post.dislikes++;
      return newState;
    }
    default:
      return state;
  }
};