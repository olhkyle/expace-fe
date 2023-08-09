import styled from '@emotion/styled';
import {
	Children,
	ForwardedRef,
	HTMLAttributes,
	InputHTMLAttributes,
	ReactElement,
	ReactNode,
	cloneElement,
	forwardRef,
} from 'react';
import { useId } from '../../hooks/useId';
import { FieldError } from 'react-hook-form';
import { Flex, Text } from '.';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
	label?: ReactNode;
	children: ReactElement;
	bottomText?: string;
}

const Input = ({ label, children, bottomText, ...props }: InputProps) => {
	const child = Children.only(children); // check if children is only one child - children === child
	const generatedId = useId('input');
	const id = child.props.id ?? generatedId;
	const isError: boolean = child.props.error ?? false;

	return (
		<div css={{ display: 'flex', flexDirection: 'column', width: '100%' }} {...props}>
			<label
				htmlFor={id}
				css={{
					display: `${label ? 'inline-block' : 'none'}`,
					padding: '4px 0',
					fontSize: '14px',
					fontWeight: '500',
					lineHeight: 1.6,
					color: 'var(--color-black)',
				}}>
				{label}
			</label>
			{cloneElement(child, {
				id,
				...child.props,
			})}
			{bottomText !== null ? <BottomText isError={isError}>{bottomText}</BottomText> : null}
		</div>
	);
};

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	type: 'text' | 'password';
	name: string;
	placeholder: string;
	width: number;
	error?: string | FieldError;
}

Input.TextField = forwardRef(
	({ type, name, placeholder, width = 320, error, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<TextField type={type} name={name} placeholder={placeholder} width={width} error={!!error} ref={ref} {...props} />
		);
	},
);

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	id: string;
	width?: number;
}

Input.Checkbox = forwardRef(({ id, width = 100, ...props }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<Flex direction="row" width={width}>
			<Checkbox type="checkbox" id={id} ref={ref} {...props} />
			<Text color="var(--color-black)">Please agree with our Terms of Service</Text>
		</Flex>
	);
});

const BottomText = styled.p<{ isError: boolean }>`
	display: inline-block;
	margin-top: 4px;
	color: ${({ isError }) => (isError ? 'var(--color-red)' : 'var(--color-gray-400)')};
	font-size: 14px;
	font-weight: 400;
`;

const TextField = styled.input<{ width: number; error: boolean }>`
	margin: 0;
	padding: 0.75rem 1rem;
	width: 340px;
	font-size: 14px;
	line-height: 24px;
	border: none;
	border-radius: 8px;
	outline: none;
	box-shadow: ${({ error }) => (error ? 'inset 0 0 0 1px var(--color-red)' : 'inset 0 0 0 1px var(--color-gray-400)')};

	&:focus {
		box-shadow: ${({ error }) =>
			error ? 'inset 0 0 0 2px var(--color-red)' : 'inset 0 0 0 1px var(--color-blue-200)'};
	}

	@media screen and (min-width: 640px) {
		width: ${({ width }) => `${width}px`};
	}
`;

const Checkbox = styled.input`
	margin-right: 1rem;
	width: 18px;
	height: 18px;
	border: 1px solid black;
	border-radius: 2px;
	vertical-align: middle;
	appearance: none;

	&:checked {
		background-color: var(--color-gray-600);
	}
`;

export default Input;
