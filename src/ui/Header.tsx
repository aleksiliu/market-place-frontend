import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
	background-color: white;
	padding: 16px 0;
	margin-bottom: 16px;
`;

const Lol = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const Header: React.FC = () => (
	<HeaderContainer>
		<Container>
			<Lol>
				<Link to='/'>
					<h1>Marketplace</h1>
				</Link>
				<div>
					<a>Register</a>
					<Button>Sign in</Button>
				</div>
			</Lol>
		</Container>
	</HeaderContainer>
);

export default Header;
