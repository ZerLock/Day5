import { Button, useDisclosure } from '@chakra-ui/react';

import AddArtistModal from 'components/Modal/AddArtistModal';

const AddArtistButton = (): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button id="add-artist-button" colorScheme="teal" variant="inline" border="2px" color="#319795" onClick={onOpen}>
				Add artist
			</Button>

			<AddArtistModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default AddArtistButton;
