import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import Container from '../components/Container';
import { Button } from '../components/Button';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { space } from '../styles';
import Modal from '../components/Modal';
import { useModal } from '../utils';
import { Formik, Form, Field } from 'formik';
import TextField from '../components/TextField';

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

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Required')
		.email('Invalid email'),
	password: Yup.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
});

const Header: React.FC<RouteComponentProps> = ({ history }) => {
	const { isShowing, toggleModal } = useModal();

	return (
		<HeaderContainer>
			<Container>
				<HeaderWrapper>
					<Link to='/'>
						<h1>Marketplace</h1>
					</Link>
					<div>
						<span>Register</span>
						<Button onClick={toggleModal}>Sign in</Button>
					</div>
					<Modal isShowing={isShowing} hide={toggleModal}>
						<p>Sign in...</p>
						<Formik
							validateOnChange={false}
							validateOnBlur={false}
							validationSchema={validationSchema}
							initialValues={{
								email: '',
								password: ''
							}}
							onSubmit={(values, actions) => {
								actions.setSubmitting(true);
								alert(JSON.stringify(values));
								toggleModal();
								history.push(`/new-announcement`);
								actions.setSubmitting(false);
							}}
						>
							{({ isSubmitting }) => (
								<Form>
									<Field
										type='email'
										name='email'
										label='email'
										component={TextField}
									/>
									<Field
										type='password'
										name='password'
										label='password'
										component={TextField}
									/>
									<Button type='submit' disabled={isSubmitting}>
										{isSubmitting ? <span>Loading</span> : <span>Log in</span>}
									</Button>
								</Form>
							)}
						</Formik>
					</Modal>
				</HeaderWrapper>
			</Container>
		</HeaderContainer>
	);
};

export default withRouter(Header);
