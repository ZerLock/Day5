import { Center, Text, Button, Link, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = (): JSX.Element => (
	<>
		<Center>
			<VStack spacing="3">
				<Text id="home-title" fontSize="3xl">
					Artists Book
				</Text>
				<Text id="home-subtitle" fontSize="2xl">
					Manage your favorite artists
				</Text>
				<Link as={RouterLink} to="/register">
					<Button id="home-register-button" colorScheme="teal" variant="solid">
						Register
					</Button>
				</Link>
				<Link as={RouterLink} to="/login">
					<Button id="home-login-button" colorScheme="teal" variant="solid">
						Login
					</Button>
				</Link>
			</VStack>
		</Center>
	</>
);

export default HomePage;
