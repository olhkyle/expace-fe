import axios from 'axios';
import React, { useEffect } from 'react';

const App = () => {
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('/api/travel');
				console.log(data);
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);
	return (
		<div>
			<div>app</div>
		</div>
	);
};

export default App;
