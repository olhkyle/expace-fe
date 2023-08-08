import { HTMLAttributes } from 'react';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
	direction?: 'row' | 'column';
	justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'center';
	alignItems?: 'flex-start' | 'flex-end' | 'center';
}

const Flex = ({ direction = 'row', justifyContent = 'flex-start', alignItems = 'center', ...props }: FlexProps) => {
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: direction,
				justifyContent,
				alignItems,
			}}
			{...props}
		/>
	);
};

export default Flex;
