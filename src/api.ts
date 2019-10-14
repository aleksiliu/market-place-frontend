import { API } from 'aws-amplify';
import { Announcement } from './types';

export default {
	apiGateway: {
		NAME: 'prod-market-place-api',
		REGION: 'eu-north-1',
		URL: process.env.REACT_APP_API_KEY,
		ID: process.env.REACT_APP_API_ID
	}
};

export const getAnnouncements = () => {
	return API.get('announcements', '/getAnnouncements', {});
};

export const postAnnouncement = (values: Announcement) => {
	const myInit = {
		body: values
	};
	return API.post('announcements', '/createAnnouncement', myInit);
};
