import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Form, Input, Spacer, Text } from '..';
import { routes } from '../../constants/routes';
import { signinSchema } from './schema';
import { signin } from '../../api/auth';
import useAuth from '../../store/useAuth';

interface SigninFormProps {}

type SigninSchema = z.infer<typeof signinSchema>;

const SigninForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus,
	} = useForm<SigninSchema>({
		resolver: zodResolver(signinSchema),
		shouldFocusError: true,
	});

	const navigate = useNavigate();
	const [user, setUser] = useAuth(({ user, setUser }) => [user, setUser]);

	console.log(user);

	const onSubmit = async (userData: SigninSchema) => {
		try {
			const { data: user } = await signin(userData);

			setUser(user);
			navigate(routes.HOME);
		} catch (e) {
			console.error(e);
			reset();
		}
	};

	useEffect(() => {
		setFocus('email');
	}, [setFocus]);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Spacer size={24} />
			<TitleWrapper>
				<Text typo="h2" color={'var(--color-black)'}>
					↳ Explore Space
				</Text>
			</TitleWrapper>
			<Spacer size={12} />
			<Input label="Email" bottomText={errors?.email?.message}>
				<Input.TextField type="text" placeholder="Enter your email" {...register('email')} error={errors?.email?.message!} width={500} />
			</Input>
			<Input label="Password" bottomText={errors?.password?.message}>
				<Input.TextField
					type="password"
					placeholder="Enter your Password"
					{...register('password')}
					error={errors?.password?.message!}
					width={500}
				/>
			</Input>
			<ForgotPasswordLink to={'/password-resets'}>Forgot Password</ForgotPasswordLink>
			<NextBtn>Explore</NextBtn>
			<Flex justifyContent="center">
				<Text color="var(--color-gray-600)">Don't have an account?</Text>
				<Spacer direction="horizontal" size={8} />
				<SignUpLink to={routes.SIGNUP}>Sign up</SignUpLink>
			</Flex>
		</Form>
	);
};

const TitleWrapper = styled.div`
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

const ForgotPasswordLink = styled(Link)`
	margin-left: auto;
	font-size: 14px;
	color: var(--color-purple);

	&:hover {
		text-decoration: underline;
	}
`;

const SignUpLink = styled(Link)`
	font-weight: 600;

	&:hover {
		text-decoration: underline;
	}
`;

export default SigninForm;
