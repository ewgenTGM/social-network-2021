import {v1} from "uuid";

const ADD_POST = 'ADD_POST',
    ADD_DISLIKE = 'ADD_DISLIKE',
    ADD_LIKE = 'ADD_LIKE';

export const addPostAC = (text) => {
    return {type: ADD_POST, payload: text}
}

export const addDislikeAC = (postId) => {
    return {type: ADD_DISLIKE, payload: postId}
}

export const addLikeAC = (postId) => {
    return {type: ADD_LIKE, payload: postId}
}

const initialState = {
    userInfo: {
        name: 'Евгений',
        born: '21.08.1985',
        city: 'Мозырь',
        edu: 'МГПУ',
        site: 'мойсайт.бел',
    },
    userPosts: {
        postItems: [
            {
                id: v1(),
                message:
                    'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.',
                likes: 4,
                dislikes: 2,
            },
            {
                id: v1(),
                message:
                    'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании модели развития. С другой стороны сложившаяся структура организации требуют от нас анализа дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.!',
                likes: 41,
                dislikes: 3,
            },
            {
                id: v1(),
                message:
                    'Товарищи! сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров в значительной степени обуславливает создание новых предложений. Таким образом сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке новых предложений.!',
                likes: 42,
                dislikes: 48,
            },
            {
                id: v1(),
                message:
                    'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации дальнейших направлений развития.',
                likes: 0,
                dislikes: 0,
            },
        ],
    },
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: v1(),
                message: action.payload,
                dislikes: 100,
                likes: 100
            };
            return {
                ...state,
                userPosts: {
                    ...state.userPosts,
                    postItems: [newPost, ...state.userPosts.postItems]
                },
            }
        }

        case ADD_LIKE: {

            const newState = {
                ...state,
                userPosts: {
                    ...state.userPosts,
                    postItems: [...state.userPosts.postItems]
                },
            };
            const index = newState.userPosts.postItems.findIndex(post => post.id === action.payload);
            newState.userPosts.postItems[index].likes++;
            return newState;
        }

        case ADD_DISLIKE: {
            const newState = {
                ...state,
                userPosts: {
                    ...state.userPosts,
                    postItems: [...state.userPosts.postItems]
                },
            };
            const index = newState.userPosts.postItems.findIndex(post => post.id === action.payload);
            newState.userPosts.postItems[index].dislikes++;
            return newState;
        }
        default:
            return state;
    }
}

export default profileReducer;