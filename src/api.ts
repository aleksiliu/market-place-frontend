import { API } from 'aws-amplify';

export type Announcement = {
	headline: string;
	description: string;
	price: string;
};

export const getAnnouncements = () => {
	let myInit = {
		headers: {}
	};
	return API.get('announcements', '/getAnnouncements', myInit);
};

export const postAnnouncement = (values: Announcement) => {
	let myInit = {
		body: values
	};
	return API.post('announcements', '/createAnnouncement', myInit);
};
