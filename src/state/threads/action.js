import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  CREATE_THREAD: 'CREATE_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NETURALIZE_VOTE_THREAD: 'NETURALIZE_VOTE_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const createThreadActionCreator = (thread) => ({
  type: ActionType.CREATE_THREAD,
  payload: {
    thread,
  },
});

const upVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const downVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const neturalizeVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NETURALIZE_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const asyncCreateThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const apiInstance = await api();
    const thread = await apiInstance.createThread({ title, body, category });
    dispatch(createThreadActionCreator(thread));
  } catch (error) {
    console.log(error);
  }
  dispatch(hideLoading());
};

const asyncUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    const apiInstance = await api();
    await apiInstance.upVoteThread(threadId);
  } catch (error) {
    console.log(error);
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    const apiInstance = await api();
    await apiInstance.downVoteThread(threadId);
  } catch (error) {
    console.log(error);
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncNeturalizeVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(
    neturalizeVoteThreadActionCreator({ threadId, userId: authUser.id }),
  );
  try {
    const apiInstance = await api();
    await apiInstance.neutralVoteThread(threadId);
  } catch (error) {
    console.log(error);
    dispatch(
      neturalizeVoteThreadActionCreator({ threadId, userId: authUser.id }),
    );
  }
};

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncCreateThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
};
