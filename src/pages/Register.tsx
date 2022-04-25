import { useState } from 'react';
import { Center, Text, Input, Button, VStack, useToast } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

import { Register as RegisterAPI } from '../services/auth';

const Register = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');

	const toast = useToast();

	const clearInput = () => {
		setEmail('');
		setPassword('');
		setPasswordConfirmation('');
	};

	const validForm = (): boolean => email !== '' && password !== '' && passwordConfirmation !== '';

	const navigate = useNavigate();
	const handleRegisterSubmit = async () => {
		if (email && password && passwordConfirmation) {
			if (password === passwordConfirmation) {
				const token = await RegisterAPI(email, password);
				console.log('token', token);
				if (!token || token === '') {
					// toast error
					toast({
						title: 'Registration failed',
						description: 'Please try again',
						status: 'error',
						duration: 5000,
						isClosable: true,
					});
					clearInput();
				} else {
					localStorage.setItem('accessToken', token);
					toast({
						title: 'Registration successful',
						status: 'success',
						duration: 5000,
						isClosable: true,
					});
					navigate('/dashboard');
				}
			} else clearInput();
		} else clearInput();
	};

	return (
		<>
			<Center>
				<VStack spacing="3" w="30%">
					<Text>Register</Text>
					<VStack>
						<Input
							className="register-input"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							className="register-input"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							className="register-input"
							placeholder="Confirmed password"
							value={passwordConfirmation}
							onChange={(e) => setPasswordConfirmation(e.target.value)}
						/>
					</VStack>
					<Button
						id="register-button-register"
						colorScheme="teal"
						variant="solid"
						onClick={() => handleRegisterSubmit()}
						disabled={!validForm()}
					>
						Register
					</Button>
					<Button id="register-button-login" colorScheme="teal" variant="solid" onClick={() => navigate('/login')}>
						Login
					</Button>
				</VStack>
			</Center>
		</>
	);
};

export default Register;
