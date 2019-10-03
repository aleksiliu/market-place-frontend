import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const theme = {
	color: {
		primary: 'blue',
		secondary: '',
		red: 'red',
		gray: '#eee'
	}
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
);
