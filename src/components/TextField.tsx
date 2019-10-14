import React from 'react';
import { FieldProps, getIn } from 'formik';
import styled from 'styled-components';
import { color } from '../styles';

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
	color: ${color.accent.error};
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
	form,
	euro
}) => {
	const error =
		getIn(form.touched, field.name) && getIn(form.errors, field.name);
	return (
		<div>
			<Label htmlFor={field.name}>{label}</Label>
			<FormInput
				style={error ? { borderColor: 'red' } : { borderColor: '#eee' }}
				type={type}
				{...field}
			/>
			{euro ? <span>€</span> : null}
			{error && <InputError>{error}</InputError>}
		</div>
	);
};

export default TextField;
