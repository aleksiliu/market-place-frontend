export default {
	s3: {
		REGION: 'eu-north-1',
		BUCKET: 'market-place-uploads'
	},
	apiGateway: {
		NAME: 'prod-market-place-api',
		REGION: 'eu-north-1',
		URL: process.env.REACT_APP_API_KEY,
		ID: process.env.REACT_APP_API_ID
	},
	cognito: {
		REGION: 'eu-north-1',
		IDENTITY_POOL_ID: ''
	}
};
