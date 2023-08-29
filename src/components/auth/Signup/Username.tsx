import { Input } from '../..';
import { ComponentUseFormReturn, FieldName } from '../../../hooks/useFunnel';
import { useEffect } from 'react';

interface UsernameProps extends ComponentUseFormReturn {
	setFocus: (name: FieldName) => void;
}

const Username = ({ register, errors, setFocus }: UsernameProps) => {
	useEffect(() => {
		setFocus('username');
	}, [setFocus]);

	return (
		<Input label="Username" bottomText={errors?.username?.message}>
			<Input.TextField
				type="text"
				placeholder="type your username"
				width={500}
				{...register('username')}
				error={errors?.username?.message!}
			/>
		</Input>
	);
};

export default Username;
