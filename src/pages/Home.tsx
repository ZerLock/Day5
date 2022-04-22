import { Center, Text, Button, Link, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HomePage = (): JSX.Element => {
	const navigate = useNavigate();
	return (
		<>
			<Center>
				<VStack spacing="3">
					<Text id="home-title" fontSize="3xl">
						Artists Book
					</Text>
					<Text id="home-subtitle" fontSize="2xl">
						Manage your favorite artists
					</Text>
					<Button id="home-register-button" colorScheme="teal" variant="solid" onClick={() => navigate('/register')}>
						Register
					</Button>
					<Button id="home-login-button" colorScheme="teal" variant="solid" onClick={() => navigate('/login')}>
						Login
					</Button>
				</VStack>
			</Center>
		</>
	);
};

export default HomePage;
