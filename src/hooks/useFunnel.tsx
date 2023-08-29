import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';
import { useId } from './useId';
import usePhase from '../store/usePhase';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FunnelProps {
	label?: ReactNode;
	children: ReactElement;
}

const Funnel = ({ children }: FunnelProps) => {
	const child = Children.only(children);
	const generatedId = useId('funnel');
	const id = child?.props.id ?? generatedId;

	return <>{cloneElement(child, { id, ...child.props })}</>;
};

type DefaultFieldValues = { email: string; password: string; username: string; 'password-confirm': string; terms: true };

export type FieldName = keyof DefaultFieldValues;

export type ComponentUseFormReturn = {
	register: UseFormRegister<DefaultFieldValues>;
	errors: FieldErrors<DefaultFieldValues>;
};

interface FunnelStepProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
	phase: number;
}

Funnel.Step = ({ phase, children, ...props }: FunnelStepProps) => {
	return (
		<div data-step-state={phase} {...props}>
			{children}
		</div>
	);
};

type Funnel = ReactNode;

const useFunnel = (funnels: Array<Funnel>) => {
	const [phase, forward, backward, reset] = usePhase(({ phase, forward, backward, reset }) => [phase, forward, backward, reset]);

	const FunnelComponent = () => (
		<Funnel>
			<Funnel.Step phase={phase}>{funnels[phase]}</Funnel.Step>
		</Funnel>
	);

	return { FunnelComponent, phase, actions: [forward, backward, reset] } as const;
};

export { Funnel, useFunnel };
