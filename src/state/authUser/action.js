import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUser = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unsetAuthUser = () => ({
  type: ActionType.UNSET_AUTH_USER,
});

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const apiInstance = await api();
    const token = await apiInstance.login({ email, password });
    apiInstance.setAccessToken(token);
    const authUser = await apiInstance.getProfile();
    dispatch(setAuthUser(authUser));
  } catch (error) {
    console.log(error);
  }
  dispatch(hideLoading());
};

const asyncUnsetAuthUser = () => async (dispatch) => {
  dispatch(unsetAuthUser());
  const apiInstance = await api();
  apiInstance.setAccessToken('');
};

export {
  ActionType,
  setAuthUser,
  unsetAuthUser,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
