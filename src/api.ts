import { API } from 'aws-amplify';
import { Announcement } from './types';

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
