import { Text, Center, HStack, Link, Button } from '@chakra-ui/react';
import { Link as RouteLink, Navigate, useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

const Dashboard = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<>
			<HStack h="7vh" top="0px" borderBottom="1px" paddingLeft="1%" marginLeft="1%" marginRight="1%">
				<Button leftIcon={<IoIosArrowBack />} colorScheme="teal" variant="solid" onClick={() => navigate('/')}>
					Home
				</Button>
				<Button colorScheme="teal" variant="solid">
					Add Artists
				</Button>
			</HStack>
		</>
	);
};

export default Dashboard;
