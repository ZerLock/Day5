import { BrowserRouter, Route, Routes as RoutesRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Register from '../pages/Register';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<RoutesRouter>
			<Route path="/" element={<HomePage />} />
			<Route path="/register" element={<Register />} />
		</RoutesRouter>
	</BrowserRouter>
);

export default Routes;
