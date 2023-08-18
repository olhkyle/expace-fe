import { useState } from 'react';

let id = 0;

export const generateId = (prefix = 'space-') => {
	id += 1;
	return `${prefix}${id}`;
};

export const useId = (prefix?: string) => {
	const [id] = useState(() => generateId(prefix));

	return id;
};
