import { Text, Box, Image, Center, Stack, Heading, Flex, useColorModeValue, Avatar } from '@chakra-ui/react';
import Artist from '../../types/artist';

const ArtistCard = (artist: Artist): JSX.Element => (
	<Center py={6}>
		<Box
			maxW={'270px'}
			w={'full'}
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={'2xl'}
			rounded={'md'}
			overflow={'hidden'}
		>
			<Image
				h={'120px'}
				w={'full'}
				src={'https://www.artmajeur.com/medias/standard/k/e/keepmagic/artwork/12228050_face-of-music.jpg'}
				objectFit={'cover'}
			/>
			<Flex justify={'center'} mt={-12}>
				<Avatar
					size={'xl'}
					src={artist.photoUrl}
					css={{
						border: '2px solid white',
					}}
				/>
			</Flex>

			<Box p={6}>
				<Stack spacing={0} align={'center'} mb={5}>
					<Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
						{artist.name}
					</Heading>
					<Text color={'gray.500'}>{artist.musicGender}</Text>
				</Stack>

				<Stack direction={'row'} justify={'center'} spacing={6}>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>{artist.rating} / 5</Text>
						<Text fontSize={'sm'} color={'gray.500'}>
							Rating
						</Text>
					</Stack>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>{artist.nationality}</Text>
						<Text fontSize={'sm'} color={'gray.500'}>
							Nationality
						</Text>
					</Stack>
				</Stack>
			</Box>
		</Box>
	</Center>
);

export default ArtistCard;
