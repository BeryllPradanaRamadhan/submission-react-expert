import { ActionType } from './action';

const initialState = [];

export default function leaderboardsReducer(leaderboards = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}
