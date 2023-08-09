import { debounce } from 'lodash';
import { useEffect, useRef } from 'react';

const useDebounce = (callback: (name: 'email' | 'password') => void, delay: number) => {
	const callbackRef = useRef();

	useEffect(() => {
		callbackRef?.current = callback;
	}, [callback]);

	const debouncedCallback = () => {
		const func = (...arg) => {
			callbackRef.current?.(...arg);
		};

		return debounce(func, delay);
	};

	return debouncedCallback;
};

export default useDebounce;
