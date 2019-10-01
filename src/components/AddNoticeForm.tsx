import React from 'react';
import * as Yup from 'yup';
import TextField from './TextField';

import { Formik, FormikActions, Form, Field } from 'formik';

export type AddNoticeFormValues = {
	title: string;
	noticeText: string;
	price: string;
};

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
			<div>Notice form</div>
			<Formik
				validateOnChange={false}
				validateOnBlur={false}
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(
					values: AddNoticeFormValues,
					actions: FormikActions<AddNoticeFormValues>
				) => {
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
							component={TextField}
						/>
						<Field name='price' label='Hinta' component={TextField} />
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
