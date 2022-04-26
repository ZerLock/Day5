import { useState } from 'react';
import { Text, Center, Button, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Login as LoginAPI } from '../services/auth';
import { useToast } from '@chakra-ui/react';

const Login = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const toast = useToast();

	const clearInput = () => {
		setEmail('');
		setPassword('');
	};

	const navigate = useNavigate();
	const handleLoginSubmit = async () => {
		if (email && password) {
			const token = await LoginAPI(email, password);
			if (!token || token === '') {
				toast({
					title: 'Login failed',
					description: 'Please try again',
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
				clearInput();
			} else {
				localStorage.setItem('accessToken', token);
				toast({
					title: 'Login successful',
					status: 'success',
					duration: 5000,
					isClosable: true,
				});
				navigate('/dashboard');
			}
		} else clearInput();
	};

	return (
		<>
			<Center>
				<VStack>
					<Text id="login-title">Login</Text>
					<Input className="login-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input
						className="login-input"
						placeholder="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button id="login-button-login" colorScheme="teal" variant="solid" onClick={() => handleLoginSubmit()}>
						Login
					</Button>
					<Button id="login-button-register" colorScheme="teal" variant="solid" onClick={() => navigate('/register')}>
						Register
					</Button>
				</VStack>
			</Center>
		</>
	);
};

export default Login;
