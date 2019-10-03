import React from 'react';
import { FieldProps } from 'formik';

import styled from 'styled-components';

const Label = styled.label`
	color: black;
	display: block;
`;

const FormInputTextArea = styled.textarea`
	border-radius: 3px;
	border: 1px solid ${props => props.theme.color.red};
	padding: 5px 5px;
	margin-bottom: 5px;
	width: 300px;
	height: 150px;
`;

const InputError = styled.p`
	color: ${props => props.theme.color.red};
	margin: 0;
`;

type OwnProps = {
	label: string;
};

type TextFieldValueProps = FieldProps & OwnProps;

const TextArea: React.FC<TextFieldValueProps> = ({
	field,
	label,
	form: { errors }
}) => (
	<div>
		<Label htmlFor={field.name}> {label}</Label>
		<FormInputTextArea
			style={
				errors[field.name] ? { borderColor: 'red' } : { borderColor: '#eee' }
			}
			{...field}
		/>
		{[field.name] && errors[field.name] && (
			<InputError>{errors[field.name]}</InputError>
		)}
	</div>
);

export default TextArea;
