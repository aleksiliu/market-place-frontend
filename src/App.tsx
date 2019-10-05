import React from 'react';
import AnnoucementForm from './ui/AnnoucementForm';
import AnnoucementList from './ui/AnnoucementList';
import Header from './ui/Header';
import Frontpage from './ui/Frontpage';
import { GlobalStyle } from './global';
import Container from './components/Container';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './ui/NotFoundPage';

const ANNOUCEMENTS = [
	{
		headline: 'Pekan nutsit',
		description: 'Helppo hoitoset',
		price: '22'
	},
	{
		headline: 'Pekan nutsit',
		description: 'Helppo hoitoset',
		price: '22'
	},
	{
		headline: 'Pekan nutsit',
		description: 'Helppo hoitoset',
		price: '22'
	},
	{
		headline: 'Pekan nutsit',
		description: 'Helppo hoitoset',
		price: '22'
	},
	{
		headline: 'Pekan nutsit',
		description: 'Helppo hoitoset',
		price: '22'
	}
];

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Container>
				<Switch>
					<Route exact path='/' component={Frontpage} />
					<Route path='/new-annoucement' component={AnnoucementForm} />
					<Route
						path='/annoucements'
						render={() => <AnnoucementList annoucements={ANNOUCEMENTS} />}
					/>
					<Route component={NotFoundPage} />
				</Switch>
			</Container>
		</>
	);
};

export default App;
