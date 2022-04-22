import { Center, Text, Button, Link, VStack } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

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
				<Link as={RouteLink} to="/register">
					<Button id="home-register-button" colorScheme="teal" variant="solid">
						Register
					</Button>
				</Link>
				<Link as={RouteLink} to="/login">
					<Button id="home-login-button" colorScheme="teal" variant="solid">
						Login
					</Button>
				</Link>
				<Link as={RouteLink} to="/dashboard">
					<Button id="home-dashboard-button" colorScheme="teal" variant="solid">
						Dashboard
					</Button>
				</Link>
			</VStack>
		</Center>
	</>
);

export default HomePage;
