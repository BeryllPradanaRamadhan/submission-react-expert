import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Flex,
  Grid,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

export default function LeaderBoardItem({ user, score }) {
  return (
    <Grid minH="54px" spacing={4}>
      <Grid item xs={10}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Avatar src={user.avatar} size="md" mr={4} />
            <Text fontSize="md" fontWeight="medium" ml={2}>
              {user.name}
            </Text>
          </Box>
        </Flex>
      </Grid>
      <Grid item xs={2}>
        <Text fontSize="md" fontWeight="medium" textAlign="right">
          {score}
        </Text>
      </Grid>
    </Grid>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
