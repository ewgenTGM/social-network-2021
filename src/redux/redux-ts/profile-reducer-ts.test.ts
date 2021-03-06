import {
  addDislikeAC,
  addLikeAC,
  addPostAC,
  profileReducerTs, removePostAC,
  UserProfileStateType
} from './profile-reducer-ts';


test( 'New posts count should be incremented', () => {
  const state: UserProfileStateType = {
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
  const newPostText: string = 'Текст нового поста';
  const action = addPostAC( newPostText );
  const newState = profileReducerTs( state, action );
  expect( newState.userPosts.length ).toBe( state.userPosts.length + 1 );
  expect( newState.userPosts[0].message ).toBe( newPostText );
} );

test( 'Remove post', () => {
  const state: UserProfileStateType = {
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
  const postId = '0';
  const action = removePostAC( postId );
  const newState = profileReducerTs( state, action );
  expect( newState.userPosts.length ).toBe( state.userPosts.length - 1 );
  expect( newState.userPosts.find( post => post.id === postId ) ).toBe( undefined );
} );


test( 'Add like to post', () => {
  const state: UserProfileStateType = {
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
  const postId = '0';
  const action = addLikeAC( postId );
  const newState = profileReducerTs( state, action );
  const postBefore = newState.userPosts.find( p => p.id === postId );
  const postAfter = state.userPosts.find( p => p.id === postId );
  expect( postBefore && postBefore.likes ).toBe( postAfter && postAfter.likes + 1 );
} );

test( 'Add dislike to post', () => {
  const state: UserProfileStateType = {
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
  const postId = '0';
  const action = addDislikeAC( postId );
  const newState = profileReducerTs( state, action );
  const postBefore = newState.userPosts.find( p => p.id === postId );
  const postAfter = state.userPosts.find( p => p.id === postId );
  expect( postBefore && postBefore.dislikes ).toBe( postAfter && postAfter.dislikes + 1 );
} );

