import { useState } from 'react';
import { Center, Text, Input, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');

	const clearInput = () => {
		setEmail('');
		setPassword('');
		setPasswordConfirmation('');
	}

	const navigate = useNavigate();
	const handleRegisterSubmit = () => {
		if (email && password && passwordConfirmation) {
			if (password === passwordConfirmation)
				navigate('/dashboard');
			else
				clearInput();
		} else
			clearInput();
	}

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
