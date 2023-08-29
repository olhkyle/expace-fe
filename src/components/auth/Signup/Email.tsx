import { useEffect } from 'react';
import { Input } from '../..';
import { ComponentUseFormReturn, FieldName } from '../../../hooks/useFunnel';

interface EmailProps extends ComponentUseFormReturn {
	setFocus: (name: FieldName) => void;
}

const Email = ({ register, errors, setFocus }: EmailProps) => {
	useEffect(() => {
		setFocus('email');
	}, [setFocus]);

	return (
		<Input label="Email" bottomText={errors?.email?.message}>
			<Input.TextField type="text" placeholder="type your email" width={500} {...register('email')} error={errors?.email?.message!} />
		</Input>
	);
};

export default Email;
