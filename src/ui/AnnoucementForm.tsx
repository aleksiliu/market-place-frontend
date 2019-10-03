import React from 'react';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import { Formik, Form, Field } from 'formik';
import { Annoucement } from '../types';
import { RouteComponentProps } from 'react-router-dom';

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
				console.log({ values });
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					history.push;
					actions.resetForm();
				}, 1000);
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
					<button type='submit' disabled={isSubmitting}>
						Send
					</button>
				</Form>
			)}
		</Formik>
	</>
);

export default AnnoucementForm;
