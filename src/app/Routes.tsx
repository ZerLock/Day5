import { BrowserRouter, Route, Routes as RoutesRouter } from 'react-router-dom';

import HomePage from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<RoutesRouter>
			<Route path="/" element={<HomePage />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
		</RoutesRouter>
	</BrowserRouter>
);

export default Routes;
