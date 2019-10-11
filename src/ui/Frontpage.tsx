import React from 'react';
import { Link } from 'react-router-dom';

const Frontpage: React.FC = () => (
	<div>
		<p>Welcome to market place!</p>
		<ul>
			<li>
				<Link to='/new-announcement'>Make new annoucement</Link>
			</li>
			<li>
				<Link to='/announcements'>Annoucements</Link>
			</li>
		</ul>
	</div>
);

export default Frontpage;
