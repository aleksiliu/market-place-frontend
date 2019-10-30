import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import config from './config';
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
	},
	Storage: {
		region: config.apiGateway.REGION,
		bucket: config.s3.BUCKET,
		identityPoolId: config.cognito.IDENTITY_POOL_ID
	}
});

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
