import { useEffect } from 'react';
import { Input } from '../..';
import { ComponentUseFormReturn, FieldName } from '../../../hooks/useFunnel';

interface PasswordConfirmProps extends ComponentUseFormReturn {
	setFocus: (name: FieldName) => void;
}

const PasswordConfirm = ({ register, errors, setFocus }: PasswordConfirmProps) => {
	useEffect(() => {
		setFocus('password-confirm');
	}, [setFocus]);

	return (
		<Input label="Password Confirm" bottomText={errors?.['password-confirm']?.message}>
			<Input.TextField
				type="text"
				placeholder="type your password again"
				width={500}
				{...register('password-confirm')}
				error={errors?.['password-confirm']?.message!}
			/>
		</Input>
	);
};

export default PasswordConfirm;
