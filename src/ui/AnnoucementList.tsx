import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Annoucement } from '../types';
import { space } from '../styles';
import { API } from 'aws-amplify';

const AnnoucementCard = styled.div`
	border-radius: 3px;
	background-color: #fff;
	padding: ${space.l}px;
`;

const AnnoucementContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	grid-gap: 1rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
`;

type AnnoucementProps = {
	annoucements: Annoucement[];
};

type State = {
	status: 'loading' | 'success' | 'error' | '';
	data: Annoucement[];
};

const AnnoucementList: React.FC<AnnoucementProps> = () => {
	const [annoucements, setAnnoucements] = useState<State>({
		status: '',
		data: []
	});

	useEffect(() => {
		setAnnoucements({ status: 'loading', data: [] });
		const fetchData = async () => {
			try {
				let myInit = {
					headers: {}
				};
				const result = await API.get(
					'annoucements',
					'/getAnnouncements',
					myInit
				);
				setAnnoucements({ status: 'success', data: result });
			} catch (error) {
				console.log(error);
				setAnnoucements({ status: 'error', data: [] });
			}
		};
		fetchData();
	}, []);

	console.log(annoucements);
	return (
		<AnnoucementContainer>
			{annoucements.status === 'error' && <p>Network error!</p>}
			{annoucements.status === 'loading' && <p>Loading...</p>}
			{annoucements.status === 'success' &&
				annoucements.data.map(annoucement => (
					<AnnoucementCard key={annoucement.headline}>
						<h2>{annoucement.headline}</h2>
						<p>{annoucement.description}</p>
						<span>{annoucement.price}€</span>
					</AnnoucementCard>
				))}
		</AnnoucementContainer>
	);
};

export default AnnoucementList;
