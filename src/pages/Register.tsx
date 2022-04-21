import { useState } from 'react';
import { Center, Text, Input, Button, VStack } from '@chakra-ui/react';

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
				</VStack>
			</Center>
		</>
	);
};

export default Register;
