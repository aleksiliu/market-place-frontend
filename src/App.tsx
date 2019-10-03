import React from 'react';
import AnnoucementForm from './ui/AnnoucementForm';
import AnnoucementList from './ui/AnnoucementList';
import Header from './ui/Header';
import Frontpage from './ui/Frontpage';
import { createGlobalStyle } from 'styled-components';
import Container from './components/Container';
import { Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
* 	{
	margin:0;
	padding: 0;
	}
body {
    background-color: #eee;
	font-family: 'Rubik', sans-serif;
  }
  a {
	  text-decoration: none;
	  color: blue;
  }
`;

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
				<Route exact path='/' component={Frontpage} />
				<Route path='/new-annoucement' component={AnnoucementForm} />
				<Route
					path='/annoucements'
					render={() => <AnnoucementList annoucements={ANNOUCEMENTS} />}
				/>
			</Container>
		</>
	);
};

export default App;
