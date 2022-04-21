import { useState } from 'react';
import { Center, Text, Input, Button, VStack, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

const Register = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');

	return (
		<>
			<Center>
				<VStack spacing="3" w="30%">
					<Text>Register</Text>
					<VStack>
						<Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
						<Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
						<Input
							placeholder="Confirmed password"
							value={passwordConfirmation}
							onChange={(e) => setPasswordConfirmation(e.target.value)}
						/>
					</VStack>
					<Button
						colorScheme="teal"
						variant="solid"
						onClick={() => {
							console.log(`email: ${email}\npassword: ${password}\npassword Confirmation: ${passwordConfirmation}`);
						}}
					>
						Register
					</Button>
					<Link as={RouteLink} to="/login">
						<Button colorScheme="teal" variant="solid">
							Login
						</Button>
					</Link>
				</VStack>
			</Center>
		</>
	);
};

export default Register;
