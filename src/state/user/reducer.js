import { ActionType } from './action';

const initialState = [];

export default function usersReducer(users = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    default:
      return users;
  }
}
