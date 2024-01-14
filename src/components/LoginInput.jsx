import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  useColorMode,
  CircularProgress,
  Alert,
  AlertIcon,
  AlertTitle,
  Stack,
  Card,
  CardBody,
} from '@chakra-ui/react';
import useLogin from '../hooks/useLogin';
import useInput from '../hooks/useInput';

export default function LoginInput() {
  const { colorMode } = useColorMode();
  const { login } = useLogin();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ email, password });
      setSuccess('Logged in successfully!');
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
      setError('Invalid username or password!');
      setEmail('');
      setPassword('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card
      bg="#f6f8fa"
      variant="outline"
      borderColor="#d8dee4"
      w="308px"
      size="lg"
      borderRadius={8}
      boxShadow="lg"
    >
      <CardBody>
        <form onSubmit={handleSubmit}>
          {error && !isLoggedIn && (
            <Alert status="error" variant="solid">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          {isLoggedIn && (
            <Alert status="success" variant="solid">
              <AlertIcon />
              <AlertTitle>{success}</AlertTitle>
            </Alert>
          )}
          <Stack spacing="4">
            <FormControl isRequired>
              <FormLabel size="sm" color={colorMode === 'dark' ? 'black' : 'black'}>
                Email Address
              </FormLabel>
              <Input
                type="text"
                bg="white"
                borderColor="#d8dee4"
                size="sm"
                borderRadius="6px"
                color={colorMode === 'dark' ? 'black' : 'black'}
                value={email}
                onChange={setEmail}
              />
            </FormControl>
            <FormControl isRequired>
              <HStack justify="space-between">
                <FormLabel size="sm" color={colorMode === 'dark' ? 'black' : 'black'}>
                  Password
                </FormLabel>
                <Button
                  as="a"
                  href="#"
                  variant="link"
                  size="xs"
                  color="#0969da"
                  fontWeight="500"
                >
                  Forgot password?
                </Button>
              </HStack>
              <Input
                type="password"
                bg="white"
                borderColor="#d8dee4"
                size="sm"
                borderRadius="6px"
                color={colorMode === 'dark' ? 'black' : 'black'}
                value={password}
                onChange={setPassword}
              />
            </FormControl>

            <Button
              type="submit"
              bg="#2da44e"
              color="white"
              size="sm"
              _hover={{ bg: '#2c974b' }}
              _active={{ bg: '#298e46' }}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                'Sign In'
              )}
            </Button>
          </Stack>
        </form>
      </CardBody>
    </Card>
  );
}
