import { useState } from 'react';

import { Modal, ModalOverlay, ModalHeader, ModalFooter, ModalBody, Text, Button, Input } from '@chakra-ui/react';

type AddModal = {
	isOpen: boolean;
	onClose: () => void;
};

const AddArtistModal = ({ isOpen, onClose }: AddModal): JSX.Element => {
	const [name, setName] = useState<string>('');
	const [rating, setRating] = useState<number>(0);
	const [nationality, setNationality] = useState<string>('');
	const [musicGender, setMusicGender] = useState<string>('');
	const [photoUrl, setPhotoUrl] = useState<string>('');

	const validForm = (): boolean =>
		name !== '' && rating !== 0 && nationality !== '' && musicGender !== '' && photoUrl !== '';

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalHeader>
					<Text id="modal-title">Add a new artist</Text>
				</ModalHeader>

				<ModalBody>
					<Input id="modal-name-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
					<Input
						id="modal-rating-input"
						placeholder="Rating"
						value={rating}
						onChange={(e) => setRating(parseInt(e.target.value))}
					/>
					<Input
						id="modal-nationality-input"
						placeholder="Nationality"
						value={nationality}
						onChange={(e) => setNationality(e.target.value)}
					/>
					<Input
						id="modal-musicGender-input"
						placeholder="Music gender"
						value={musicGender}
						onChange={(e) => setMusicGender(e.target.value)}
					/>
					<Input
						id="modal-photo-input"
						placeholder="Photo url"
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
					/>
				</ModalBody>

				<ModalFooter>
					<Button id="modal-close-button" colorScheme="teal" variant="solid" onClick={onClose}>
						Close
					</Button>
					<Button id="modal-create-button" colorScheme="teal" variant="solid" disabled={!validForm()}>
						Create
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default AddArtistModal;
