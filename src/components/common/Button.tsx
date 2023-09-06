import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	type: 'button' | 'submit';
	onClick: () => void;
}

const Button = ({ type, onClick, ...props }: ButtonProps) => {
	return (
		<button
			type={type}
			css={{ padding: '0.6rem 1.2rem', borderRadius: '8px', fontSize: '1rem', fontWeight: '600' }}
			onClick={onClick}
			{...props}
		/>
	);
};

export default Button;
