import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { space } from '../styles';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom';

const AnnouncementCard = styled.div`
	border-radius: ${space.xxs}px;
	background-color: #fff;
	padding: ${space.l}px;
`;

const AnnouncementContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	grid-gap: 1rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
`;

type Announcement = {
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
	data: Announcement[];
};
type ServiceError = {
	status: 'error';
	error: Error;
};

type Service<T> = ServiceLoading | ServiceLoaded<T> | ServiceError;

type Announcements = {
	data: Announcement[];
};

const AnnouncementList: React.FC = () => {
	const [announcements, setAnnouncements] = useState<Service<Announcements>>({
		status: 'loading'
	});

	useEffect(() => {
		setAnnouncements({ status: 'loading' });
		const fetchData = async () => {
			try {
				let myInit = {
					headers: {}
				};
				const result: Announcement[] = await API.get(
					'announcements',
					'/getAnnouncements',
					myInit
				);
				setAnnouncements({ status: 'success', data: result });
			} catch (error) {
				setAnnouncements({ status: 'error', error });
			}
		};
		fetchData();
	}, []);

	console.log(announcements);

	return (
		<AnnouncementContainer>
			{announcements.status === 'error' && <p>Network error!</p>}
			{announcements.status === 'loading' && <p>Loading...</p>}
			{announcements.status === 'success' &&
				announcements.data
					.filter(announcement => announcement.headline)
					.map(announcement => (
						<Link to={`/${announcement.announcementId}`}>
							<AnnouncementCard key={announcement.announcementId}>
								<h2>{announcement.headline}</h2>
								<p>{announcement.description}</p>
								<span>{announcement.price}€</span>
							</AnnouncementCard>
						</Link>
					))}
		</AnnouncementContainer>
	);
};

export default AnnouncementList;
