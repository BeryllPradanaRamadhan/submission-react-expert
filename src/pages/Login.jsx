import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import LoginInput from '../components/LoginInput';

export default function Login() {
  return (
    <Box>
      <Flex justify="center" align="center" height="80vh">
        <Center>
          <Stack spacing="4">
            <VStack spacing="6">
              <Heading fontWeight="500" fontSize="30px" letterSpacing="-0.5px">
                Login
              </Heading>
            </VStack>
            <LoginInput />
            <Text fontSize="sm" mt="4" textAlign="center">
              Don&apos;t have an account?
              {' '}
              <Link as="a" href="/register" color="#0969da" fontWeight="500">
                Register
              </Link>
            </Text>
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
}
