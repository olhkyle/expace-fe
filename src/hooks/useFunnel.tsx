import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';
import { useId } from './useId';
import { Flex, Text } from '../components';
import usePhase from '../store/usePhase';

interface FunnelProps {
	label?: ReactNode;
	children: ReactElement;
}

const Funnel = ({ label, children, ...props }: FunnelProps) => {
	const child = Children.only(children);
	const generatedId = useId('funnel');
	const id = child?.props.id ?? generatedId;

	return (
		<Flex direction="row" {...props}>
			<Text color="var(--color-black)">{label}</Text>
			{cloneElement(child, { id, ...child.props })}
		</Flex>
	);
};

interface FunnelStepProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
	id: string;
}

Funnel.Step = ({ children, ...props }: FunnelStepProps) => {
	return <div {...props}>{children}</div>;
};

type Step = ReactNode;

const useFunnel = (steps: Step[]) => {
	const [phase, forward, backward, reset] = usePhase(({ phase, forward, backward, reset }) => [
		phase,
		forward,
		backward,
		reset,
	]);

	const Component = () => <>{steps[phase]}</>;

	return { Component, phase, actions: [forward, backward, reset] };
};

export { Funnel, useFunnel };
