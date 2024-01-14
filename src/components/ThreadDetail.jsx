import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Avatar,
  Stack,
} from '@chakra-ui/react';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import timeSince from '../utils/timeSince';

export default function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  authUser,
}) {
  return (
    <>
      <Box pb={0}>
        <Text fontSize={16} color="gray.500" mb={2}>
          {category}
        </Text>
        <Text
          mb={2}
          fontSize="xl"
          fontWeight="bold"
          color="black"
        >
          {title}
        </Text>
        <Text color="black" mb={4}>
          {body}
        </Text>
      </Box>
      <Box ml={1} pb={4} pt={2}>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          neturalizeVote={neturalizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <Text color="black" ml={0.5}>
          <Stack direction="row" spacing={2}>
            Dibuat Oleh
            <Avatar
              alt="Avatar Icon"
              src={owner.avatar}
              boxSize={4}
              ml={0.5}
              mr={0.5}
            />
            {owner.name}
          </Stack>
        </Text>

        <Text color="black" ml={0.5}>
          {timeSince(new Date(createdAt))}
        </Text>
      </Box>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired,
};
