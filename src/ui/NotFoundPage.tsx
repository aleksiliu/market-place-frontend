import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
	<div>
		404. Page not found! <Link to='/'>Back to front</Link>
	</div>
);

export default NotFoundPage;
