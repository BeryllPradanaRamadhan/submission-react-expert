import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  ERROR_RECEIVE_USERS: 'ERROR_RECEIVE_USERS',
};

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});

const asyncRegisterUser = ({ name, email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const apiInstance = await api();
    await apiInstance.register({ name, email, password });
  } catch (error) {
    alert(error.response.data.message);
  }
  dispatch(hideLoading());
};

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
