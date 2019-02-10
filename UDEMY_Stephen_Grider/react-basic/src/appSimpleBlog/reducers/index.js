import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// rule of reducer
// 1.should return anything besides 'undefine'
// 2.must not mutate its input 'state' argument

/** redux文件寫不要改變state的內容，而是永遠傳一個新的物件的原因如下
 *  1.表面意思：對於剛學redux的人好理解
 *  2.會造成非預期內容的機率很小，這個原因如下
 *  redux會檢查每次action完後的值，如果有改變，就會更新狀態，react會rerender
 *  但是檢查的過程是用!==檢查，這個是檢查記憶體的參照位子，
 *  如果在reducer中修改了state(指物件或是陣列)，或是修改後但與原本的一樣，
 *  這樣redux會判斷為沒有修改，而沒有rerender，也造成後面的action執行reducer時可可能錯誤
 */
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
