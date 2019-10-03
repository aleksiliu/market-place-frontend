import React from 'react';
import AnnoucementForm from './ui/AnnoucementForm';
import AnnoucementList from './ui/AnnoucementList';
import Header from './ui/Header';
import { createGlobalStyle } from 'styled-components';
import Container from './components/Container';

const GlobalStyle = createGlobalStyle`
* {
margin:0;
padding: 0;
}
  body {
    background-color: #eee;
	font-family: 'Rubik', sans-serif;
	
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
				<AnnoucementForm />
				<AnnoucementList annoucements={ANNOUCEMENTS} />
			</Container>
		</>
	);
};

export default App;
