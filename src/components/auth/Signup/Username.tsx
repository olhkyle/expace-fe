import { Input } from '../..';

const Username = () => {
	return (
		<Input label="Username">
			<Input.TextField
				type="text"
				name="username"
				placeholder="type your username"
				width={500}
				ref={node => node?.focus()}
			/>
		</Input>
	);
};

export default Username;
