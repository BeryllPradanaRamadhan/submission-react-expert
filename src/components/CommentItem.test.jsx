/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentItem from './CommentItem';

describe('CommentItem component', () => {
  it('should render the comment item correctly', () => {
    // Arrange
    const comment = {
      id: 1,
      content: 'This is a sample comment.',
      createdAt: new Date().toISOString(),
      owner: {
        name: 'John Doe',
        avatar: 'avatar.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      upVote: jest.fn(),
      downVote: jest.fn(),
      neturalizeVote: jest.fn(),
      authUser: null,
    };

    // Act
    render(<CommentItem {...comment} />);

    // Assert
    expect(screen.getByText(comment.owner.name)).toBeInTheDocument();
    expect(screen.getByText(comment.content)).toBeInTheDocument();
  });
});
