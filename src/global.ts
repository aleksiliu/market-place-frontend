import { createGlobalStyle, css } from 'styled-components';
import { color, typography } from './styles';

export const bodyStyles = css`
	font-family: ${typography.type.primary};
	font-size: ${typography.size.s3}px;
	color: ${color.gray};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
	-webkit-overflow-scrolling: touch;
	background-color: ${color.gray[400]};
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	a {
		text-decoration: none;
		color: ${color.link};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: ${typography.weight.regular};
		margin: 0;
		padding: 0;
	}
	button,
	input,
	textarea,
	select {
		outline: none;
		font-family: ${typography.type.primary};
	}
	sub,
	sup {
		font-size: 0.8em;
	}
	sub {
		bottom: -0.2em;
	}
	sup {
		top: -0.2em;
	}
	b,
	em {
		font-weight: ${typography.weight.bold};
	}

	&.ReactModal__Body--open {
		overflow: hidden;
		&.hide-intercom #intercom-container {
			display: none;
		}
	}
	.ReactModalPortal > div {
		opacity: 0;
	}
	.ReactModalPortal .ReactModal__Overlay {
		transition: all 200ms ease-in;
		&--after-open {
			opacity: 1;
		}
		&--before-close {
			opacity: 0;
		}
	}
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
