import React from 'react';
import { FieldProps, getIn } from 'formik';
import { color } from '../styles';
import styled from 'styled-components';

const Label = styled.label`
	color: black;
	display: block;
`;

const FormInputTextArea = styled.textarea`
	border-radius: 3px;
	border: 1px solid ${color.accent.error};
	padding: 5px 5px;
	margin-bottom: 5px;
	width: 300px;
	height: 150px;
`;

const InputError = styled.p`
	color: ${color.accent.error};
	margin: 0;
`;

type OwnProps = {
	label: string;
};

type TextFieldValueProps = FieldProps & OwnProps;

const TextArea: React.FC<TextFieldValueProps> = ({ field, label, form }) => {
	const error =
		getIn(form.touched, field.name) && getIn(form.errors, field.name);
	return (
		<div>
			<Label htmlFor={field.name}> {label}</Label>
			<FormInputTextArea
				style={error ? { borderColor: 'red' } : { borderColor: '#eee' }}
				{...field}
			/>
			{error && <InputError>{error}</InputError>}
		</div>
	);
};

export default TextArea;
