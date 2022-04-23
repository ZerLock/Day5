import { useState } from 'react';
import { Grid } from '@chakra-ui/react';
import TopBar from '../components/Bar/TopBar';
import ArtistCard from '../components/Card/ArtistCard';
import Artist from '../types/artist';

const Dashboard = (): JSX.Element => {
	const [artist] = useState<Artist>({
		name: 'Léo',
		rating: 5,
		nationality: 'FR',
		musicGender: 'PopHard',
		photoUrl:
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2FCodingClubLyon&psig=AOvVaw1v-0v13q6DZ5phW0Ju-CZE&ust=1650808972409000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJis7-SsqvcCFQAAAAAdAAAAABA2',
	});

	return (
		<>
			<TopBar />
			<Grid margin="1%" justifyItems="center" templateColumns="repeat(5, 1fr)">
				<ArtistCard {...artist} />
			</Grid>
		</>
	);
};

export default Dashboard;
