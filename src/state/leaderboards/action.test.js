import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
} from './action';

it('should dispatch action correctly when data fetching success', async () => {
  // arrange
  const fakeLeaderboards = [
    {
      user: {
        id: 'users-1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
      score: 10,
    },
  ];

  const apiInstance = {
    getLeaderBoards: jest.fn().mockResolvedValue(fakeLeaderboards),
  };

  const dispatch = jest.fn();

  // action
  await asyncPopulateLeaderboards()(dispatch);

  // assert
  expect(dispatch).toHaveBeenCalledWith(showLoading());
  expect(apiInstance.getLeaderBoards).toHaveBeenCalled();
  expect(dispatch).toHaveBeenCalledWith(
    receiveLeaderboardsActionCreator(fakeLeaderboards),
  );
  expect(dispatch).toHaveBeenCalledWith(hideLoading());
});

it('should dispatch action and log error when data fetching failed', async () => {
  // arrange
  const fakeError = new Error('Something went wrong');

  const apiInstance = {
    getLeaderBoards: jest.fn().mockRejectedValue(fakeError),
  };

  const dispatch = jest.fn();
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  // action
  await asyncPopulateLeaderboards()(dispatch);

  // assert
  expect(dispatch).toHaveBeenCalledWith(showLoading());
  expect(apiInstance.getLeaderBoards).toHaveBeenCalled();
  expect(consoleSpy).toHaveBeenCalledWith(fakeError);
  expect(dispatch).toHaveBeenCalledWith(hideLoading());

  // cleanup
  consoleSpy.mockRestore();
});
