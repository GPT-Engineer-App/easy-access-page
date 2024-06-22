import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("Both fields are required.");
      return;
    }
    // Handle login logic here
    console.log("Logging in with", userId, password);
    setError("");
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" textAlign="center">Login</Text>
          {error && <Text color="red.500">{error}</Text>}
          <FormControl id="userId">
            <FormLabel>User ID</FormLabel>
            <Input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSubmit}>Login</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;