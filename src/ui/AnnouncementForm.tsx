import React from 'react';
import { Storage } from 'aws-amplify';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import { Formik, Form, Field } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '../components/Button';
import * as api from '../api';
import { Announcement } from '../types';
import Thumb from '../components/Thumb';

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
		.required('Required'),
	file: Yup.mixed()
});

const initialValues: Announcement = {
	headline: '',
	description: '',
	price: 0,
	file: undefined
};

const AnnouncementForm: React.FC<RouteComponentProps> = ({ history }) => (
	<>
		<Formik
			validateOnChange={false}
			validateOnBlur={false}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);

				console.log({
					fileName: values.file.name,
					type: values.file.type,
					size: `${values.file.size} bytes`
				});

				Storage.put(values.file.name, values.file)
					.then(result => console.log(result))
					.catch(err => console.log(`error: ${err}`));

				// api
				// 	.postAnnouncement(values)
				// 	.then(response => {
				// 		actions.setSubmitting(false);
				// 		actions.resetForm();
				// 		history.push(`/announcements`);
				// 	})
				// 	.catch(error => {
				// 		actions.setSubmitting(false);
				// 	});
				actions.setSubmitting(false);
			}}
		>
			{({ values, isSubmitting, setFieldValue }) => (
				<Form>
					<Field name='headline' label='Headline' component={TextField} />
					<Field
						name='description'
						label='Description'
						component={TextArea}
					></Field>
					<Field name='price' euro={true} label='Price' component={TextField} />
					<input
						name='file'
						type='file'
						onChange={event => {
							if (event.currentTarget.files) {
								setFieldValue('file', event.currentTarget.files[0]);
							}
						}}
					/>
					<Thumb file={values.file}></Thumb>
					<Button type='submit' disabled={isSubmitting}>
						{isSubmitting ? <span>Loading</span> : <span>Send</span>}
					</Button>
				</Form>
			)}
		</Formik>
	</>
);

export default AnnouncementForm;
