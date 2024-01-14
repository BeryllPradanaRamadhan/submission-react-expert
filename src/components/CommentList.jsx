import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentShape } from './CommentItem';

export default function CommentsList({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
  neturalizeVoteComment,
}) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          content={comment.content}
          author={comment.author}
          createdAt={comment.createdAt}
          upVotesBy={comment.upVotesBy}
          downVotesBy={comment.downVotesBy}
          owner={comment.owner}
          authUser={authUser}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neturalizeVote={neturalizeVoteComment}
        />
      ))}
    </>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neturalizeVoteComment: PropTypes.func.isRequired,
};
