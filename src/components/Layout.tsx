import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Nav } from '.';

const Layout = () => {
	return (
		<>
			<Nav />
			<Main>
				<Outlet />
			</Main>
		</>
	);
};

const Main = styled.main`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	height: 100%;

	@media (min-width: 640px) {
		width: 640px;
	}

	@media (min-width: 768px) {
		width: 768px;
	}

	@media (min-width: 1024px) {
		width: 1024px;
	}

	@media (min-width: 1280px) {
		width: 1280px;
	}
`;

export default Layout;
