import { z } from 'zod';

const signinSchema = z.object({
	email: z.string().nonempty('This field has to be filled').email({ message: 'Email is invalid or already taken' }),
	password: z
		.string()
		.nonempty('This field has to be filled')
		.min(1, { message: 'Please type password' })
		.regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/, {
			message: `Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter`,
		}),
});

const signupSchema = signinSchema
	.extend({
		username: z
			.string()
			.nonempty('This field has to be filled')
			.min(4, { message: 'Username must be 4 characters or more' })
			.max(10, { message: 'Username must be 10 characters or less' })
			.regex(/^[a-zA-Z0-9_]+$/, { message: 'Username must contain only letters, numbers and underscore (_)' }),
		'password-confirm': z.string().min(1, { message: 'Confirm Password is Required' }),
		terms: z.literal(true, {
			errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
		}),
	})
	.refine(data => data.password === data['password-confirm'], {
		path: ['password-confirm'],
		message: `Password doesn't match`,
	});

export { signinSchema, signupSchema };
