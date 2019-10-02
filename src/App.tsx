import React from 'react';
import AnnoucementForm from './components/AnnoucementForm';
import AnnoucementList from './components/AnnoucementList';

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
			<AnnoucementForm />
			<AnnoucementList annoucements={ANNOUCEMENTS} />
		</>
	);
};

export default App;
