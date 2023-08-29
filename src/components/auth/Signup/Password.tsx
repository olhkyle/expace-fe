import { useEffect } from 'react';
import { Input } from '../..';
import { ComponentUseFormReturn, FieldName } from '../../../hooks/useFunnel';

interface PasswordProps extends ComponentUseFormReturn {
	setFocus: (name: FieldName) => void;
}

const Password = ({ register, errors, setFocus }: PasswordProps) => {
	useEffect(() => {
		setFocus('password');
	}, [setFocus]);

	return (
		<Input label="Password" bottomText={errors?.password?.message}>
			<Input.TextField
				type="text"
				placeholder="type your password"
				width={500}
				{...register('password')}
				error={errors?.password?.message!}
			/>
		</Input>
	);
};

export default Password;
