import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../user/action';
import { receiveThreadsActionCreator } from '../threads/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const apiInstance = await api();
      const users = await apiInstance.getAllUsers();
      const threads = await apiInstance.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(hideLoading());
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoading());
  };
}
export { hideLoading, showLoading };
export default asyncPopulateUsersAndThreads;
