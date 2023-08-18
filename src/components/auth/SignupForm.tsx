import { z } from 'zod';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Form, Text } from '..';
import { signupSchema } from './schema';
import Email from './Signup/Email';
import Username from './Signup/Username';
import Terms from './Signup/Terms';
import Password from './Signup/Password';
import PasswordConfirm from './Signup/PasswordConfirm';
import { useFunnel } from '../../hooks/useFunnel';

type SignupSchema = z.infer<typeof signupSchema>;

const funnel = [<Terms />, <Username />, <Email />, <Password />, <PasswordConfirm />];

const SignupForm = () => {
	const {
		handleSubmit,
		register,
		formState: { isValid, dirtyFields },
		control,
		trigger,
	} = useForm<SignupSchema>({ resolver: zodResolver(signupSchema), shouldFocusError: true });

	/**
	 * TODO:
	 * 1. button activate state depending on input checked or pass regex
	 * 2. possess a value in textfield
	 * 3. zod assessment
	 */

	const {
		Component,
		phase,
		actions: [forward, backward, reset],
	} = useFunnel(funnel);

	const onSubmit = (data: SignupSchema) => console.log(data);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<TitleWrapper>
				<Text typo="h2" color="var(--color-black)">
					Start your Space Travel
				</Text>
			</TitleWrapper>
			<ProgressBar phase={phase} />

			<Component />

			<Flex justifyContent="space-between" alignItems="center" gap="1rem" margin="1rem 0">
				<AuthButton onClick={forward}>{phase === funnel.length - 1 ? 'Register' : 'Next'}</AuthButton>
				<BackwardButton onClick={backward}>Back</BackwardButton>
			</Flex>
			<HaveAccountLinkWrapper>
				<Text color="var(--color-gray-700)">
					Already Have an account?{' '}
					<HaveAccountLink to={'/signin'} onClick={reset}>
						Sign In
					</HaveAccountLink>
				</Text>
			</HaveAccountLinkWrapper>
		</Form>
	);
};

const TitleWrapper = styled.div`
	margin-top: 3rem;
	div {
		font-size: 40px;
	}
`;

const ProgressBar = styled.div<{ phase: number }>`
	margin-bottom: 1rem;
	width: ${({ phase }) => `${(phase + 1) * 20}%`};
	height: 4px;
	background-color: var(--color-gray-600);
	z-index: 5;
`;

const AuthButton = styled.button`
	padding: 0.75rem 1rem;
	width: 100%;
	font-size: 16px;
	font-weight: 600;
	border-radius: 8px;
	color: var(--color-white);
	background-color: var(--color-black);

	&:hover {
		background-color: var(--color-gray-800);
	}
`;

const BackwardButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 12px;
	border: 1px solid var(--color-black);
	border-radius: 8px;

	&:hover {
		color: var(--color-blue-300);
		border: 1px solid var(--color-blue-200);
	}
`;

const HaveAccountLinkWrapper = styled.div`
	margin: 0 auto;
`;

const HaveAccountLink = styled(Link)`
	margin-left: 4px;
	font-weight: 600;

	&:hover {
		text-decoration: underline;
	}
`;

export default SignupForm;
