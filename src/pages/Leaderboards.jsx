import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Box,
  Text,
  Grid,
} from '@chakra-ui/react';
import { asyncPopulateLeaderboards } from '../state/leaderboards/action';
import LeaderBoardItem from '../components/LeaderBoardItem';

export default function Leaderboards() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <Container>
      <Box>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          ml={2}
          mt={2}
        >
          Leaderboards
        </Text>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <Grid item xs={10}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              ml={2}
              mt={2}
            >
              10 Pengguna Teratas
            </Text>
          </Grid>
          <Grid item xs={2}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              mt={2}
              ml={4}
            >
              Skor
            </Text>
          </Grid>
        </Grid>
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </Box>
    </Container>
  );
}
