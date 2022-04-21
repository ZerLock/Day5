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
					<Text id="login-title">Login</Text>
					<Input className="login-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input
						className="login-input"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						id="login-button-login"
						colorScheme="teal"
						variant="solid"
						onClick={() => {
							console.log(`email: ${email}\npassword: ${password}`);
						}}
					>
						Login
					</Button>
					<Link as={RouteLink} to="/register">
						<Button id="login-button-register" colorScheme="teal" variant="solid">
							Register
						</Button>
					</Link>
				</VStack>
			</Center>
		</>
	);
};

export default Login;
