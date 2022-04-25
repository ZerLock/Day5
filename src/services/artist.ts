import axios from 'axios';
import { BACKEND_URL } from '../config/services';

const CreateArtist = async (
	name: string,
	rating: number,
	nationality: string,
	musicGender: string,
	photoUrl: string,
): Promise<boolean> => {
	try {
		const result = await axios({
			method: 'POST',
			url: `${BACKEND_URL}/artist`,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
			data: {
				name: name,
				rating: rating,
				nationality: nationality,
				musicGender: musicGender,
				photoUrl: photoUrl,
			},
		});
		if (result.status === 201) return true;
		return false;
	} catch (error) {
		return false;
	}
};

export { CreateArtist };
