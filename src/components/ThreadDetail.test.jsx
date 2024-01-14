/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ThreadDetail from './ThreadDetail';

describe('ThreadDetail component', () => {
  it('should render the thread details correctly', () => {
    // Arrange
    const thread = {
      id: 1,
      title: 'Sample Thread',
      body: 'This is a sample thread body.',
      owner: {
        name: 'John Doe',
        avatar: 'avatar.jpg',
      },
      category: 'Sample Category',
      createdAt: new Date().toISOString(),
      upVotesBy: [],
      downVotesBy: [],
      upVoteThreadDetail: jest.fn(),
      downVoteThreadDetail: jest.fn(),
      neturalizeVoteThreadDetail: jest.fn(),
      authUser: null,
    };

    // Act
    render(<ThreadDetail {...thread} />);

    // Assert
    expect(screen.getByText(thread.category)).toBeInTheDocument();
    expect(screen.getByText(thread.title)).toBeInTheDocument();
    expect(screen.getByText(thread.body)).toBeInTheDocument();
  });
});
