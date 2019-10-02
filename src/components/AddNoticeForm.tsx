import React from 'react';
import * as Yup from 'yup';
import TextField from './TextField';
import TextArea from './TextArea';
import { Formik, Form, Field } from 'formik';
import { AddNoticeFormValues } from '../types';

const validationSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Liian lyhyt!')
		.max(50, 'Liian pitkä!')
		.required('Tämä tarvitaan'),
	noticeText: Yup.string()
		.min(2, 'Liian lyhyt!')
		.required('Tämä tarvitaan!'),
	price: Yup.number()
		.typeError('Hinta pitää olla numeroina!')
		.positive()
		.required('Hinta tarvitaan!')
});

const initialValues: AddNoticeFormValues = {
	title: '',
	noticeText: '',
	price: ''
};

const AddNoticeForm: React.FC = () => {
	return (
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
						actions.resetForm();
					}, 1000);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field name='title' label='Otsikko' component={TextField} />
						<Field
							name='noticeText'
							label='Ilmoitusteksti'
							component={TextArea}
						></Field>
						<Field
							name='price'
							euro={true}
							label='Hinta'
							component={TextField}
						/>
						<button type='submit' disabled={isSubmitting}>
							Lähetä
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default AddNoticeForm;
