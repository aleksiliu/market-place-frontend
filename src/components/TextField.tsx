import React from 'react';
import { FieldProps } from 'formik';

import styled from 'styled-components';

const Label = styled.label`
	color: black;
	display: block;
`;

const FormInput = styled.input`
	border-radius: 3px;
	border: 1px solid #eee;
	padding: 5px 5px;
	margin-bottom: 5px;
`;

const InputError = styled.p`
	color: red;
	margin: 15px 0;
`;

interface TextFieldValues {
	label: string;
}

type TextFieldValueProps = FieldProps & TextFieldValues;

const TextField: React.FC<TextFieldValueProps> = ({
	field,
	label,
	form: { errors }
}) => (
	<div>
		<Label htmlFor={field.name}> {label}</Label>
		<FormInput type='text' {...field} />
		{[field.name] && errors[field.name] && (
			<InputError>{errors[field.name]}</InputError>
		)}
	</div>
);

export default TextField;
