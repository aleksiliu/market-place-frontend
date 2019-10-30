import React from 'react';
import { RouteComponentProps } from 'react-router';

type TParams = { announcementId: string };

const AnnouncementPage: React.FC<RouteComponentProps<TParams>> = ({
	match
}) => (
	<div>
		Single Announcement<p>{match.params.announcementId}</p>
	</div>
);

export default AnnouncementPage;
