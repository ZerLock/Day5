import { useState } from 'react';
import { Text, Center, Button, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const clearInput = () => {
		setEmail('');
		setPassword('');
	};

	const navigate = useNavigate();
	const handleLoginSubmit = () => {
		if (email && password) navigate('/dashboard');
		else clearInput();
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
