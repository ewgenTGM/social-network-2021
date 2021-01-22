import {v1} from "uuid";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW';

export const followAC = (userId) => {
    return {type: FOLLOW, payload: userId}
}

export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, payload: userId}
}

const initialState = {

    users: [
        {
            userid: v1(),
            name: 'Марина',
            surname: 'Бичан',
            location: {
                country: 'Баларусь',
                city: 'Мозырь'
            },
            status:
                'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности.',
            isFollow: true,

        },
        {
            userid: v1(),
            name: 'Иван',
            surname: 'Алесич',
            location: {
                country: 'Баларусь',
                city: 'Лельчицы'
            },
            status:
                'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности!',
            isFollow: true,
        },
        {
            userid: v1(),
            name: 'Дарья',
            surname: 'Иванова',
            location: {
                country: 'Баларусь',
                city: 'Минск'
            },
            status:
                'Товарищи! сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития.',
            isFollow: false,
        },
        {
            userid: v1(),
            name: 'Алексей',
            surname: 'Никишов',
            location: {
                country: 'Баларусь',
                city: 'Брагин'
            },
            status:
                'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает.',
            isFollow: false,
        },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                isFollow: true
            }
        case UNFOLLOW: {
            return {
                ...state,
                isFollow: false
            }
        }
        default:
            return state;
    }
}

export default usersReducer;