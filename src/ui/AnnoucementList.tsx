import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { space } from '../styles';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom';

const AnnoucementCard = styled.div`
	border-radius: ${space.xxs}px;
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

type Annoucement = {
	announcementId: string;
	createdAt: number;
	description: string;
	headline: string;
	price: string;
	storeName: string;
};

type ServiceLoading = {
	status: 'loading';
};
type ServiceLoaded<T> = {
	status: 'success';
	data: Annoucement[];
};
type ServiceError = {
	status: 'error';
	error: Error;
};

type Service<T> = ServiceLoading | ServiceLoaded<T> | ServiceError;

type Annoucements = {
	data: Annoucement[];
};

const AnnoucementList: React.FC = () => {
	const [annoucements, setAnnoucements] = useState<Service<Annoucements>>({
		status: 'loading'
	});

	useEffect(() => {
		setAnnoucements({ status: 'loading' });
		const fetchData = async () => {
			try {
				let myInit = {
					headers: {}
				};
				const result: Annoucement[] = await API.get(
					'announcements',
					'/getAnnouncements',
					myInit
				);
				setAnnoucements({ status: 'success', data: result });
			} catch (error) {
				setAnnoucements({ status: 'error', error });
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
				annoucements.data
					.filter(annoucement => annoucement.headline)
					.map(annoucement => (
						<Link to={`/${annoucement.announcementId}`}>
							<AnnoucementCard key={annoucement.announcementId}>
								<h2>{annoucement.headline}</h2>
								<p>{annoucement.description}</p>
								<span>{annoucement.price}€</span>
							</AnnoucementCard>
						</Link>
					))}
		</AnnoucementContainer>
	);
};

export default AnnoucementList;
