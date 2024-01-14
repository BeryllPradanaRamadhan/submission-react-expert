import asyncPopulateUsersAndThreads, { showLoading, hideLoading } from './action';
import { receiveUsersActionCreator } from '../user/action';
import { receiveThreadsActionCreator } from '../threads/action';
import api from '../../utils/api';

jest.mock('../../utils/api');

// Test scenario:
// asyncPopulateUsersAndThreads should dispatch the correct actions and call the API methods
describe('asyncPopulateUsersAndThreads', () => {
  it('should dispatch the correct actions and call the API methods', async () => {
    const apiInstance = await api();
    const dispatch = jest.fn();
    const users = [{ id: 1, name: 'John' }];
    const threads = [{ id: 1, title: 'Thread 1' }];

    // Mocking the API methods
    apiInstance.mockResolvedValueOnce({
      getAllUsers: jest.fn().mockResolvedValueOnce(users),
      getAllThreads: jest.fn().mockResolvedValueOnce(threads),
    });

    // Calling the asyncPopulateUsersAndThreads function and asserting the expected dispatch calls
    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(apiInstance).toHaveBeenCalled();
    expect(apiInstance().getAllUsers).toHaveBeenCalled();
    expect(apiInstance().getAllThreads).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(users));
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(threads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // Test scenario: asyncPopulateUsersAndThreads should dispatch hideLoading even if an error occurs
  it('should dispatch hideLoading even if an error occurs', async () => {
    const dispatch = jest.fn();
    const error = new Error('apiInstance error');

    // Mocking the apiInstance error
    apiInstance.mockRejectedValueOnce(error);

    // Calling the asyncPopulateUsersAndThreads function and asserting the expected dispatch calls
    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(apiInstance).toHaveBeenCalled();
    expect(apiInstance().getAllUsers).toHaveBeenCalled();
    expect(apiInstance().getAllThreads).not.toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
