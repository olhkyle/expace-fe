import React from 'react';
import styled from '@emotion/styled';
import { Input } from '..';

const SigninForm = () => {
	return (
		<Form>
			<Input type="text" name="email" placeholder="Enter your email" width={500} />
			<Input type="password" name="password" placeholder="Enter your Password" width={500} />
			<NextBtn type="button">Next</NextBtn>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const NextBtn = styled.button`
	padding: 0.5rem 1rem;
	border-radius: 8px;
	color: #fff;
	background-color: #000;

	&:hover {
		background-color: #1d1d1d;
	}
`;

export default SigninForm;
