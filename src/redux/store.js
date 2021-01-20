// import profileReducer from "./profile-reducer";
// import dialogReducer from "./dialog-reducer";
//
// const store = {
//     _state: {
//         userProfilePage: {
//             userInfo: {
//                 name: 'Евгений',
//                 born: '21.08.1985',
//                 city: 'Мозырь',
//                 edu: 'МГПУ',
//                 site: 'мойсайт.бел',
//             },
//             userPosts: {
//                 postItems: [
//                     {
//                         id: 1,
//                         message:
//                             'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.',
//                         likes: 4,
//                         dislikes: -8,
//                     },
//                     {
//                         id: 2,
//                         message:
//                             'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании модели развития. С другой стороны сложившаяся структура организации требуют от нас анализа дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.!',
//                         likes: 41,
//                         dislikes: -3,
//                     },
//                     {
//                         id: 3,
//                         message:
//                             'Товарищи! сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров в значительной степени обуславливает создание новых предложений. Таким образом сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке новых предложений.!',
//                         likes: 42,
//                         dislikes: -8,
//                     },
//                     {
//                         id: 4,
//                         message:
//                             'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации дальнейших направлений развития.',
//                         likes: 0,
//                         dislikes: -2,
//                     },
//                 ],
//             },
//         },
//         userDialogsPage: {
//             dialogItems: [
//                 {userId: 1, userName: 'Марина'},
//                 {userId: 2, userName: 'Иван'},
//                 {userId: 3, userName: 'Дарья'},
//                 {userId: 4, userName: 'Алексей'},
//                 {userId: 5, userName: 'Саня'},
//             ],
//             userMessages: {
//                 messageItems: [
//                     {messageId: 1, message: 'Привет, Марина'},
//                     {messageId: 2, message: 'Привет, Иван'},
//                     {messageId: 3, message: 'Привет, Дарья'},
//                     {messageId: 4, message: 'Привет, Алексей'},
//                     {messageId: 5, message: 'Привет, Саня'},
//                 ],
//             },
//         },
//
//     },
//     _subscribers: [],
//     subscribe(observer) {
//         this._subscribers.push(observer);
//
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscribers() {
//         this._subscribers.forEach(sub => sub())
//     },
//     dispatch(action) {
//         this._state.userProfilePage = profileReducer(this._state.userProfilePage, action);
//         this._state.userDialogsPage = dialogReducer(this._state.userDialogsPage, action);
//         this._callSubscribers();
//     },
// }
//
//
// export default store;