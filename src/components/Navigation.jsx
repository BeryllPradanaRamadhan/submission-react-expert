import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { userShape } from './ThreadItem';

export default function Navigation({ authUser, signOut }) {
  return (
    <Box pb={10}>
      <Flex bg="#ffffff">
        <Box flexGrow={1}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Text fontSize="xl">Forum Apps</Text>
          </Link>
        </Box>

        <Box flexGrow={1}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="black">Threads</Button>
          </Link>
          <Link to="/leaderboards" style={{ textDecoration: 'none' }}>
            <Button color="black">Leaderboards</Button>
          </Link>
        </Box>
        <Avatar
          alt="Avatar Icon"
          src={authUser.avatar}
          boxSize={10}
          mr={2}
        />
        <Button variant="solid" colorScheme="red" onClick={signOut}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};
