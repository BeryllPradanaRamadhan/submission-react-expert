import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

const receiveLeaderboardsActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: {
    leaderboards,
  },
});

const asyncPopulateLeaderboards = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const apiInstance = await api();
    const leaderboards = await apiInstance.getLeaderBoards();
    dispatch(receiveLeaderboardsActionCreator(leaderboards));
  } catch (error) {
    console.log(error);
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
  showLoading,
  hideLoading,
};
