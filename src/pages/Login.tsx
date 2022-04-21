import { useState } from 'react';
import { Text, Center, Button, Input, VStack, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

const Login = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Center>
				<VStack>
					<Text>Login</Text>
					<Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<Button
						colorScheme="teal"
						variant="solid"
						onClick={() => {
							console.log(`email: ${email}\npassword: ${password}`);
						}}
					>
						Login
					</Button>
					<Link as={RouteLink} to="/register">
						<Button colorScheme="teal" variant="solid">
							Register
						</Button>
					</Link>
				</VStack>
			</Center>
		</>
	);
};

export default Login;
