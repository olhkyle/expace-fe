import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import _ from 'lodash';
import { Flex, Form, Text } from '..';
import { signupSchema } from './schema';
import { useFunnel } from '../../hooks/useFunnel';
import Terms from './Signup/Terms';
import Email from './Signup/Email';
import Username from './Signup/Username';
import Password from './Signup/Password';
import PasswordConfirm from './Signup/PasswordConfirm';
import { SIGNIN } from '../../constants/routes';

type SignupSchema = z.infer<typeof signupSchema>;

/**
 * getFieldState : password-confirm 단계에서 password가 valid 한 경우 활성화되도록 유도할 수 있으나, 현재 funnel로 설계하고 있기 때문에 불필요
 */

const SignupForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, dirtyFields },
		setFocus,
	} = useForm<SignupSchema>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			terms: true,
			username: '',
			email: '',
			password: '',
			'password-confirm': '',
		},
		shouldFocusError: true,
	});

	/**
	 * TODO:
	 * 1. button activate state depending on input checked or pass regex
	 * 2. possess a value in textfield
	 * 3. zod assessment
	 * 4. email double check
	 */

	const funnels = [
		<Terms register={register} errors={errors} />,
		<Username register={register} errors={errors} setFocus={setFocus} />,
		<Email register={register} errors={errors} setFocus={setFocus} />,
		<Password register={register} errors={errors} setFocus={setFocus} />,
		<PasswordConfirm register={register} errors={errors} setFocus={setFocus} />,
	];

	const {
		FunnelComponent,
		phase,
		actions: [forward, backward, reset],
	} = useFunnel(funnels);

	const disabledState = (phase: number) => {
		switch (phase) {
			case 0:
				return dirtyFields.terms;
			case 1:
				return errors?.username?.message!;
			case 2:
				return errors?.email?.message!;
			case 3:
				return errors?.password?.message!;
			case 4:
				return errors?.['password-confirm']?.message!;
		}
	};

	console.log(dirtyFields);
	console.log(phase);
	console.log(errors);
	console.log(disabledState(phase));

	const onSubmit = (data: SignupSchema) => console.log(data);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<TitleWrapper>
				<Text typo="h2" color="var(--color-black)">
					Start your Space Travel
				</Text>
			</TitleWrapper>
			<ProgressBar phase={phase} />

			<FunnelComponent />

			<Flex justifyContent="space-between" alignItems="center" gap="1rem" margin="1rem 0">
				<AuthButton disabled={disabledState(phase) as never} onClick={forward}>
					{phase === funnels.length - 1 ? 'Register' : 'Next'}
				</AuthButton>
				<BackwardButton onClick={backward}>Back</BackwardButton>
			</Flex>

			<HaveAccountLinkWrapper>
				<Text color="var(--color-gray-700)">
					Already Have an account?{' '}
					<HaveAccountLink to={SIGNIN} onClick={reset}>
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

const AuthButton = styled.button<{ disabled: never }>`
	padding: 0.75rem 1rem;
	width: 100%;
	font-size: 16px;
	font-weight: 600;
	border-radius: 8px;
	color: var(--color-white);
	background-color: ${({ disabled }) => (disabled ? 'var(--color-gray-300)' : 'var(--color-black)')};

	&:hover {
		background-color: ${({ disabled }) => (disabled ? 'var(--color-gray-300)' : ' var(--color-gray-800)')};
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
