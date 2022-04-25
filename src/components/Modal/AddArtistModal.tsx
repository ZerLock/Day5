import { useState } from 'react';

import {
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Text,
	Button,
	Input,
	ModalContent,
	useToast,
} from '@chakra-ui/react';

import { CreateArtist } from '../../services/artist';

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

	const toast = useToast();

	const clearInput = () => {
		setName('');
		setRating(0);
		setNationality('');
		setMusicGender('');
		setPhotoUrl('');
	};

	const validForm = (): boolean =>
		name !== '' && rating !== 0 && nationality !== '' && musicGender !== '' && photoUrl !== '';

	const handleSubmitCreateArtist = async () => {
		if (validForm() === true) {
			const result = await CreateArtist(name, rating, nationality, musicGender, photoUrl);
			if (result) {
				toast({
					title: 'Artist created !',
					status: 'success',
					duration: 5000,
					isClosable: true,
				});
				onClose();
			} else {
				toast({
					title: 'Artist creation failed !',
					description: 'Please try again',
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
				clearInput();
			}
		}
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
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
						<Button
							id="modal-create-button"
							colorScheme="teal"
							variant="solid"
							disabled={!validForm()}
							onClick={() => handleSubmitCreateArtist()}
						>
							Create
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddArtistModal;
