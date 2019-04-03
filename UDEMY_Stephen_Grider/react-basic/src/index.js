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

// AppSimpleBlog(redux-thunk & redux with async)
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import AppSimpleBlog from './appSimpleBlog/AppSimpleBlog';
// import reducers from './appSimpleBlog/reducers';

// const store = createStore(reducers, applyMiddleware(thunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <AppSimpleBlog />
//   </Provider>,
//   document.querySelector('#root')
// );

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
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './appClient/reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <AppClient />
//   </Provider>,
//   document.querySelector('#root'),
// );

// AppRedux_p
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import AppRedux from './appRedux_p/AppRedux';
// import reducers from './appRedux_p/reducers';

// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <AppRedux />
//   </Provider>,
//   document.querySelector('#root')
// );

// AppLangSwitch
// import AppLangSwitch from './appLangSwitch/AppLangSwitch';
// ReactDOM.render(<AppLangSwitch />, document.querySelector('#root'));

// AppLangSwitch
import AppHook from './appHook/AppHook';
ReactDOM.render(<AppHook />, document.querySelector('#root'));
