import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import TopBar from '../components/Bar/TopBar';
import ArtistCard from '../components/Card/ArtistCard';
import Artist from '../types/artist';

import { getUserBook } from '../services/user';

const Dashboard = (): JSX.Element => {
	const [artists, setArtists] = useState<Artist[]>([]);

	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			navigate('/');
		}
		(async () => {
			const result = await getUserBook();
			console.log(result);
			setArtists(result);
		})();
	}, []);

	return (
		<>
			<TopBar />
			<Grid margin="1%" justifyItems="center" templateColumns="repeat(5, 1fr)">
				{artists.map((artist: Artist) => (
					<ArtistCard {...artist} />
				))}
			</Grid>
		</>
	);
};

export default Dashboard;
