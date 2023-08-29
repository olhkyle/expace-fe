import styled from '@emotion/styled';
import { Input, Text } from '../..';
import { ComponentUseFormReturn } from '../../../hooks/useFunnel';

interface TermsProps extends ComponentUseFormReturn {}

const Terms = ({ register, errors }: TermsProps) => {
	return (
		<>
			<TextWrapper>
				<Text color="var(--color-gray-700)">
					By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.
				</Text>
			</TextWrapper>
			<Input>
				<Input.Checkbox id="terms" width={100} {...register('terms')} error={errors?.terms?.message!} />
			</Input>
		</>
	);
};

const TextWrapper = styled.div`
	margin-bottom: 1rem;
`;

export default Terms;
