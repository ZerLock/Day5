import axios from 'axios';
import { BACKEND_URL } from '../config/services';

import Artist from '../types/artist';

const getUserBook = async (): Promise<Artist[]> => {
	try {
		const result = await axios({
			method: 'GET',
			url: `http://${BACKEND_URL}/user`,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				accessToken: `${localStorage.getItem('accessToken')}`,
			},
		});
		if (result.status === 200) return result.data.user.artists;
		return [];
	} catch (error) {
		return [];
	}
};

export { getUserBook };
