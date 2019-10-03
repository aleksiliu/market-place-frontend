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
	color: ${props => props.theme.color.red};
	margin: 0;
`;

type OwnProps = {
	label: string;
	type: string;
	euro: boolean;
};

type TextFieldValueProps = FieldProps & OwnProps;

const TextField: React.FC<TextFieldValueProps> = ({
	field,
	label,
	type = 'text',
	form: { errors },
	euro
}) => (
	<div>
		<Label htmlFor={field.name}>{label}</Label>
		<FormInput
			style={
				errors[field.name] ? { borderColor: 'red' } : { borderColor: '#eee' }
			}
			type={type}
			{...field}
		/>
		{euro ? <span>€</span> : null}
		{[field.name] && errors[field.name] && (
			<InputError>{errors[field.name]}</InputError>
		)}
	</div>
);

export default TextField;
