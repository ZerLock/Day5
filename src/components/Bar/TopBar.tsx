import { useNavigate } from 'react-router-dom';
import { Stack, Text, Button, Box, Flex } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';

import AddArtistButton from '../Button/AddArtistButton';

const TopBar = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Box>
			<Flex py="2" px="4" borderBottom="1px" align="center">
				<Stack flex={{ base: 1, md: 'start' }} justify="flex-start" direction="row" spacing="2">
					<Button leftIcon={<IoIosArrowBack />} colorScheme="teal" variant="solid" onClick={() => navigate('/')}>
						Home
					</Button>
					<AddArtistButton />
				</Stack>
				<Stack flex={{ base: 1, md: 0 }} justify="flex-end">
					<Text fontStyle="italic" fontWeight="bold" fontSize="2xl">
						MyArtistsBook
					</Text>
				</Stack>
			</Flex>
		</Box>
	);
};

export default TopBar;
