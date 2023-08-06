import { useEffect, useRef } from 'react';

const useOnClickOutside = (eventHandler: () => void) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const onClickHandler = ({ target }: MouseEvent) => {
		if (target === null) {
			return;
		}

		if (containerRef?.current?.contains(target as Node)) return;

		eventHandler();
	};

	useEffect(() => {
		document.addEventListener('click', onClickHandler);

		return () => document.removeEventListener('click', onClickHandler);
	}, []);

	return containerRef;
};

export default useOnClickOutside;
