import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';

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
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
