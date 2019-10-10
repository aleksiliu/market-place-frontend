import { API } from 'aws-amplify';

export const getAnnouncements = () => {
	let myInit = {
		headers: {}
	};
	return API.get('announcements', '/getAnnouncements', myInit);
};
