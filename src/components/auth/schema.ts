import { z } from 'zod';

const signinSchema = z.object({
	email: z
		.string()
		.nonempty('This field has to be filled')
		.email({ message: 'Invalid Email. Please enter a valid email address' }),
	password: z
		.string()
		.min(1, { message: 'Please type password' })
		.regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/)
		.min(8, 'Type more than 8 letters')
		.max(15, 'Type less than 16 letters'),
});

const signupSchema = signinSchema
	.extend({
		username: z
			.string()
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
