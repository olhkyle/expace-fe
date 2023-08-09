import { Input } from '../..';

const PasswordConfirm = () => {
	return (
		<Input label="Password Confirm">
			<Input.TextField
				type="text"
				name="password-confirm"
				placeholder="type your password again"
				width={500}
				ref={node => node?.focus()}
			/>
		</Input>
	);
};

export default PasswordConfirm;
