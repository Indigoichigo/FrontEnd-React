import { combineReducers } from 'redux';
// 為避免混淆，另取個別名
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
