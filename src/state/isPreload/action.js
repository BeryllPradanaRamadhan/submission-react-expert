import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUser } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreload(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const apiInstance = await api();
      const authUser = await apiInstance.getProfile();
      dispatch(setAuthUser(authUser));
    } catch (error) {
      console.log(error);
      dispatch(setAuthUser(null));
    } finally {
      dispatch(setIsPreload(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreload, asyncPreloadProcess };
