import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { space } from '../styles';
import Modal from '../components/Modal';
import { useModal } from '../utils';

const HeaderContainer = styled.header`
	background-color: white;
	padding: ${space.m}px 0;
	margin-bottom: ${space.m}px;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const Header: React.FC = () => {
	const { isShowing, toggle } = useModal();

	return (
		<HeaderContainer>
			<Container>
				<HeaderWrapper>
					<Link to='/'>
						<h1>Marketplace</h1>
					</Link>
					<div>
						<a>Register</a>
						<Button onClick={toggle}>Sign in</Button>
					</div>
					<Modal isShowing={isShowing} hide={toggle}>
						There is no spoon...
					</Modal>
				</HeaderWrapper>
			</Container>
		</HeaderContainer>
	);
};

export default Header;
