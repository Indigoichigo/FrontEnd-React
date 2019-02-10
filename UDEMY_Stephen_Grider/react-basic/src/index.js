import React from 'react';
import ReactDOM from 'react-dom';

// AppSeaon
// import AppSeason from './appSeason/AppSeason';
// ReactDOM.render(<AppSeason />, document.querySelector('#root'));

// AppPics
// import AppPics from './appPics/AppPics';
// ReactDOM.render(<AppPics />, document.querySelector('#root'));

// AppMedia
// import AppMedia from './appMedia/AppMedia';
// ReactDOM.render(<AppMedia />, document.querySelector('#root'));

// // AppSong (with Redux and React-Redux)
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import AppSong from './appSong/AppSong';
// import reducers from './appSong/reducers';
// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <AppSong />
//   </Provider>,
//   document.querySelector('#root')
// );

// AppSimpleBlog(redux-thunk)

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppSimpleBlog from './appSimpleBlog/AppSimpleBlog';
import reducers from './appSimpleBlog/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppSimpleBlog />
  </Provider>,
  document.querySelector('#root')
);

// AppTodoList - practice
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import AppTodoList from './appTodoList_p/AppTodoList';
// import reducers from './appTodoList_p/reducers';
// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <AppTodoList />
//   </Provider>,
//   document.querySelector('#root')
// );

//AppClient
// import AppClient from './appClient/AppClient';
// ReactDOM.render(<AppClient />, document.querySelector('#root'));
