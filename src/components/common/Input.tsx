import styled from '@emotion/styled';

interface InputProps {
	type: 'text' | 'password';
	name: string;
	placeholder: string;
	bottomText?: string;
	width: number;
}

const Input = ({ type, name, placeholder, bottomText, width = 400 }: InputProps) => {
	const isError: boolean = false;

	return (
		<div>
			<StyledInput type={type} name={name} placeholder={placeholder} width={width} />
			{bottomText !== null ? <BottomText isError={isError}>{bottomText}</BottomText> : null}
		</div>
	);
};

const StyledInput = styled.input<{ width: number }>`
	margin: 0;
	padding: 0.5rem 1rem;
	width: ${({ width }) => `${width}px`};
	font-size: 14px;
	border: 1px solid grey;
	border-radius: 8px;
	background-color: white;
	outline: none;
`;

const BottomText = styled.p<{ isError: boolean }>`
	display: inline-block;
	margin-top: 4px;
	color: ${({ isError }) => (isError ? 'red' : 'grey')};
	font-size: 14px;
	font-weight: 400;
`;

export default Input;
