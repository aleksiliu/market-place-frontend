import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Button from '../components/Button';

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
				<h1>Market place</h1>
				<Button>Sign in</Button>
			</Lol>
		</Container>
	</HeaderContainer>
);

export default Header;
