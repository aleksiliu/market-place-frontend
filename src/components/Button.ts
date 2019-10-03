import styled from 'styled-components';

const Button = styled.span`
	display: inline-block;
	border-radius: 25px;
	padding: 8px 24px;
	background: ${props => props.theme.color.primary};
	color: #fff;
	text-decoration: none;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	transition: all 0.25s;
	cursor: pointer;
	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
		filter: brightness(105%);
	}
`;

export default Button;
