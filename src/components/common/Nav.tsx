import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { ABOUT, HOME, SIGNIN, SIGNUP } from '../../constants/routes';
import { navigators } from '../../constants/navigators';
import { SideNav } from '.';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import useSideNavActive from '../../store/useToggleState';

const Nav = () => {
	const navigate = useNavigate();

	const [active, toggleActive, deActivate] = useSideNavActive(({ active, toggleActive, deActivate }) => [active, toggleActive, deActivate]);

	return (
		<>
			<Container>
				<Navigators>
					{navigators.map(navigator => (
						<li key={navigator}>
							<Link to={navigator === 'Q&A' ? ABOUT : navigator.toLowerCase()}>{navigator}</Link>
						</li>
					))}
				</Navigators>
				<Logo to={HOME} onClick={deActivate}>
					<h1>ExPace</h1>
				</Logo>
				<ButtonGroup>
					<LoginButton
						onClick={() => {
							navigate(SIGNIN);
							deActivate();
						}}>
						Login
					</LoginButton>
					<SignupButton onClick={() => navigate(SIGNUP)}>Signup</SignupButton>
					<ToggleButton type="button" onClick={toggleActive}>
						{active ? <RxCross2 size={27} /> : <RxHamburgerMenu size={27} />}
					</ToggleButton>
				</ButtonGroup>
			</Container>
			<SideNav />
		</>
	);
};

const Container = styled.nav`
	position: sticky;
	top: 0;
	display: grid;
	grid-template-columns: 124px 1fr;
	gap: 2rem;
	margin: 0 auto;
	padding: 0 2rem;
	height: 100px;
	backdrop-filter: blur(4px);
	z-index: 9999;

	@media screen and (min-width: 640px) {
		width: 640px;
	}

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 100px 1fr;
		width: 880px;
	}

	@media screen and (min-width: 1024px) {
		width: 1024px;
	}

	@media screen and (min-width: 1280px) {
		width: 1280px;
	}
`;

const Logo = styled(Link)`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 2rem;
		font-weight: 900;
	}
`;

const Navigators = styled.ul`
	display: none;
	align-items: center;

	li {
		position: relative;
		padding: 0.6rem 1.2rem;
		font-weight: 600;
		border-radius: 8px;

		&:hover {
			color: var(--color-gray-600);
		}
	}

	@media screen and (min-width: 768px) {
		display: flex;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
`;

const Button = styled.button`
	padding: 0.6rem 1.2rem;
	border-radius: 8px;
	font-size: 1rem;
	font-weight: 600;
`;

const LoginButton = styled(Button)`
	background-color: var(--color-gray-200);

	&:hover {
		background-color: var(--color-gray-300);
	}
`;

const SignupButton = styled(Button)`
	display: none;
	color: var(--color-white);
	background-color: var(--color-black);

	&:hover {
		background-color: var(--color-gray-800);
	}

	@media screen and (min-width: 768px) {
		display: block;
	}
`;

const ToggleButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 27px;
	height: 27px;
	font-size: 1rem;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default Nav;
