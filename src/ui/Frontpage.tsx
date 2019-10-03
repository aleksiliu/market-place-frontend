import React from 'react';
import { Link } from 'react-router-dom';

const Frontpage: React.FC = props => (
	<div>
		<p>Welcome to market place!</p>
		<ul>
			<li>
				<Link to='/new-annoucement'>Make new annoucement</Link>
			</li>
			<li>
				<Link to='/annoucements'>Annoucements</Link>
			</li>
		</ul>
	</div>
);

export default Frontpage;
