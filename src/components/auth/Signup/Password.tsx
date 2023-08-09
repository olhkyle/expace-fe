import React from 'react';
import { Input } from '../..';

const Password = () => {
	return (
		<Input label="Password">
			<Input.TextField
				type="text"
				name="password"
				placeholder="type your password"
				width={500}
				ref={node => node?.focus()}
			/>
		</Input>
	);
};

export default Password;
