import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Box, Heading } from '@chakra-ui/react';
import { asyncCreateThread } from '../state/threads/action';
import ThreadInput from '../components/ThreadInput';

export default function AddThread() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };
  return (
    <Container mt={2}>
      <Box>
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          ml={2}
          mt={2}
        >
          Create New Thread
        </Heading>
        <ThreadInput addThread={onAddThread} />
      </Box>
    </Container>
  );
}
