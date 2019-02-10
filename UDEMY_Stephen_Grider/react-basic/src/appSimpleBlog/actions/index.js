import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // it may be more clear to somebody if refator the code below(just an optionally)
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // value represent end or exexcute function we chain

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));
};

// redux-thunk can return a object or a function
// if it's an object, the flow is just like normal redux to return an object
// if it's a function, redux-thunk will take care of them, then return an object
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

// the code above is shorten by code below
// export const fetchPosts = () => {
//   return async dispatch => {
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({
//       type: 'FETCH_POSTS',
//       payload: response,
//     });
//   };
// };

//--------------------------

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};

// resolve the problem of fetch userid every single time
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// });
