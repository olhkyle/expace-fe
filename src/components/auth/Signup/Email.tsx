import React from 'react';
import { Input } from '../..';

const Email = () => {
	return (
		<Input label="Email">
			<Input.TextField type="text" name="email" placeholder="type your email" width={500} ref={node => node?.focus()} />
		</Input>
	);
};

export default Email;
