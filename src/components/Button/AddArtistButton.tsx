import { Button } from '@chakra-ui/react';

const AddArtistButton = (): JSX.Element => {
	const handleNewArtist = () => {
		console.log('New artist button clicked');
	};

	return (
		<>
			<Button
				id="add-artist-button"
				colorScheme="teal"
				variant="inline"
				border="2px"
				color="#319795"
				onClick={() => handleNewArtist()}
			>
				Add artist
			</Button>
		</>
	);
};

export default AddArtistButton;
