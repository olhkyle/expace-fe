import React from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { HOME, SIGNIN } from '../../constants/routes';

const navigators = ['Stars', 'Reservation', 'Q&A'];

const Nav = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Logo to={HOME}>
				<h1>SpacePop</h1>
			</Logo>
			<RightSideOfNav>
				<Navigators>
					{navigators.map(navigator => (
						<li key={navigator}>
							<Link to={navigator.toLowerCase()}>{navigator}</Link>
						</li>
					))}
				</Navigators>
				<LoginButton type="button" onClick={() => navigate(SIGNIN)}>
					Login
				</LoginButton>
			</RightSideOfNav>
		</Container>
	);
};

export default Nav;

const Container = styled.nav`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	height: 80px;

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

const Logo = styled(Link)`
	h1 {
		font-size: 1.4rem;
		font-weight: 600;
	}
`;

const RightSideOfNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	padding: 0 1rem;
`;

const Navigators = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 1rem;

	li {
		border-bottom: 1px solid white;
	}
	li:hover {
		border-bottom: 1px solid black;
	}
`;

const LoginButton = styled.button`
	font-size: 1rem;
	font-weight: 600;
	&:hover {
		color: blue;
	}
`;
