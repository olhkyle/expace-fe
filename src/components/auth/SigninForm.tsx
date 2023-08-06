import styled from '@emotion/styled';
import { Flex, Input, Spacer, Text } from '..';
import { Link } from 'react-router-dom';
import { SIGNUP } from '../../constants/routes';

interface SigninFormProps {}

const SigninForm = () => {
	return (
		<Form>
			<Spacer size={24} />
			<Wrapper>
				<Text typo="h2" color={'var(--color-black)'}>
					↳ Explore Space
				</Text>
			</Wrapper>
			<Spacer size={12} />
			<Input label="Email">
				<Input.TextField type="text" name="email" placeholder="Enter your email" width={500} />
			</Input>
			<Input label="Password">
				<Input.TextField type="password" name="password" placeholder="Enter your Password" width={500} />
			</Input>
			<NextBtn type="button">Explore</NextBtn>
			<Flex justifyContent="center">
				<Text color="var(--color-gray-600)">Don't have an account?</Text>
				<Spacer direction="horizontal" size={8} />
				<SignUpLink to={SIGNUP}>Sign up</SignUpLink>
			</Flex>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Wrapper = styled.div`
	div {
		font-size: 40px;
	}
`;

const NextBtn = styled.button`
	margin-top: 1rem;
	padding: 0.75rem 1rem;
	font-size: 16px;
	font-weight: 600;
	border-radius: 8px;
	color: var(--color-white);
	background-color: var(--color-black);

	&:hover {
		background-color: var(--color-gray-800);
	}
`;

const SignUpLink = styled(Link)`
	font-weight: 600;
	&:hover {
		text-decoration: underline;
	}
`;

export default SigninForm;
