import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import {
  Box,
  Avatar,
  Stack,
  Text,
  Grid,
  Divider,
} from '@chakra-ui/react';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import timeSince from '../utils/timeSince';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <>
      <Box pb={0}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Avatar Icon"
                src={owner.avatar}
                sx={{ width: 20, height: 20 }}
              />
              <Text
                variant="body2"
                component="div"
                color="text.primary"
                fontWeight="bold"
              >
                {owner.name}
              </Text>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Text
              variant="body2"
              color="text.primary"
              component="span"
              ml={10}
            >
              {timeSince(new Date(createdAt))}
            </Text>
          </Grid>
        </Grid>
        <Text
          gutterBottom
          variant="body2"
          component="div"
          color="text.primary"
          fontWeight="medium"
          mt={1}
        >
          {parse(content)}
        </Text>
      </Box>
      <Box ml={1} pb={4} pt={2}>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </Box>
      <Divider />
    </>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};
export { commentShape };
