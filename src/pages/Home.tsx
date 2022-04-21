import { Center, Text, Button, Link, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = (): JSX.Element => (
	<>
		<Center>
			<VStack spacing="3">
				<Text fontSize="3xl">Artists Book</Text>
				<Text fontSize="2xl">Manage your favorite artists</Text>
				<Link as={RouterLink} to="/register">
					<Button colorScheme="teal" variant="solid">
						Register
					</Button>
				</Link>
			</VStack>
		</Center>
	</>
);

export default HomePage;
