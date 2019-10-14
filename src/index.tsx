import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import config from './api';
import { BrowserRouter as Router } from 'react-router-dom';

Amplify.configure({
	API: {
		endpoints: [
			{
				name: 'announcements',
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			}
		]
	}
});

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
