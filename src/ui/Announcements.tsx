import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { space } from '../styles';
import * as api from '../api';
import { Link } from 'react-router-dom';
import { Announcement } from '../types';
import { color } from '../styles';
import Spinner from '../components/Spinner';

const AnnouncementCard = styled.div`
	border-radius: ${space.xxs}px;
	background-color: #fff;
	padding: ${space.l}px;
	color: ${color.gray[900]};
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

const Announcements: React.FC = () => {
	const [announcements, setAnnouncements] = useState<Service<Announcements>>({
		status: 'loading'
	});

	useEffect(() => {
		api
			.getAnnouncements()
			.then(response => {
				setAnnouncements({ status: 'success', data: response });
			})
			.catch(error => {
				setAnnouncements({ status: 'error', error });
			});
	}, []);

	return (
		<AnnouncementContainer>
			{announcements.status === 'error' && <p>Network error!</p>}
			{announcements.status === 'loading' && <Spinner />}
			{announcements.status === 'success' &&
				announcements.data.map(announcement => (
					<Link
						to={`/announcements/${announcement.announcementId}`}
						key={announcement.announcementId}
					>
						<AnnouncementCard>
							<h2>{announcement.headline}</h2>
							<p>{announcement.description}</p>
							<span>{announcement.price}€</span>
						</AnnouncementCard>
					</Link>
				))}
		</AnnouncementContainer>
	);
};

export default Announcements;
