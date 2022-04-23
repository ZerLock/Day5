import { Text, Box, Image, Center, Stack } from '@chakra-ui/react';
import Artist from '../../types/artist';

const ArtistCard = (artist: Artist): JSX.Element => (
	<Box bgColor="blue.100">
		<Center>
			<Stack direction="column" spacing="5px" padding="5px">
				<Image src={artist.photoUrl} />
				<Text>{artist.name}</Text>
				<Text>{artist.musicGender}</Text>
				<Text>{artist.nationality}</Text>
				<Text>{artist.musicGender}</Text>
			</Stack>
		</Center>
	</Box>
);

export default ArtistCard;
