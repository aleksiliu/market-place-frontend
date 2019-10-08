import styled from 'styled-components';
import { color, space, typography } from '../styles';

export const Button = styled.button`
	font-size: ${typography.size.s3}px;
	border: none;
	outline: none;
	display: inline-block;
	border-radius: ${space.xl}px;
	padding: ${space.m}px ${space.l}px;
	background: ${color.primary};
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

/* ${props =>
		props.isDisabled &&
		`
      cursor: not-allowed !important;
      opacity: 0.5;
      
    `}

	${props =>
		props.isLoading &&
		`
      cursor: progress !important;
      opacity: 0.7;
      
    `} */

// type Props = {
// 	isDisabled?: string;
// 	isLoading?: string;
// 	onClick(): void;
// };

// const Button: React.FC<Props> = ({
// 	isDisabled,
// 	isLoading,
// 	children,
// 	onClick
// }) => {
// 	return (
// 		<ButtonStyles
// 			isLoading={isLoading}
// 			isDisabled={isDisabled}
// 			onClick={onClick}
// 		>
// 			{children}
// 			{isLoading && 'Loading...'}}
// 		</ButtonStyles>
// 	);
// };

// export default Button;
