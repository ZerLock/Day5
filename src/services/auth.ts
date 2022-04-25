import { BACKEND_URL } from '../config/services';

import axios from 'axios';

const Register = async (email: string, password: string): Promise<string> => {
	try {
		const result = await axios({
			method: 'POST',
			url: `http://${BACKEND_URL}/auth/register`,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
			data: {
				email: email,
				password: password,
			},
		});
		return result.data.accessToken;
	} catch (error) {
		return '';
	}
};

const Login = async (email: string, password: string): Promise<string> => {
	try {
		const result = await axios({
			method: 'POST',
			url: `http://${BACKEND_URL}/auth/login`,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
			data: {
				email: email,
				password: password,
			},
		});
		return result.data.accessToken;
	} catch (error) {
		return '';
	}
};

export { Register, Login };
