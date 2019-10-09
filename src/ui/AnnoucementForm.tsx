import React from 'react';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import { Formik, Form, Field } from 'formik';
import { Annoucement } from '../types';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '../components/Button';
import { API } from 'aws-amplify';

const validationSchema = Yup.object().shape({
	headline: Yup.string()
		.min(2, 'Too short')
		.max(50, 'Too long')
		.required('Required'),
	description: Yup.string()
		.min(2, 'Too short')
		.required('Required'),
	price: Yup.number()
		.typeError('Price not valid')
		.positive()
		.required('Required')
});

const initialValues: Annoucement = {
	headline: '',
	description: '',
	price: ''
};

const AnnoucementForm: React.FC<RouteComponentProps> = ({ history }) => (
	<>
		<Formik
			validateOnChange={false}
			validateOnBlur={false}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);

				const postData = async () => {
					try {
						let myInit = {
							body: values
						};
						await API.post('announcements', '/createAnnouncement', myInit);
						actions.setSubmitting(false);
						actions.resetForm();
						history.push(`/annoucements`);
					} catch (error) {
						console.log(error);
						actions.setSubmitting(false);
					}
				};
				postData();
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field name='headline' label='Headline' component={TextField} />
					<Field
						name='description'
						label='Description'
						component={TextArea}
					></Field>
					<Field name='price' euro={true} label='Price' component={TextField} />
					<Button type='submit' disabled={isSubmitting}>
						Send
					</Button>
				</Form>
			)}
		</Formik>
	</>
);

export default AnnoucementForm;
