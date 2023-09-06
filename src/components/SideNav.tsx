import styled from '@emotion/styled';
import { navigators } from '../constants/navigators';
import { NavLink } from 'react-router-dom';
import { routes } from '../constants/routes';
import useSideNavActive from '../store/useToggleState';
import useAuth from '../store/useAuth';
import { isLoggedIn } from '../utils/auth';

const SideNav = () => {
	const [active, deActivate] = useSideNavActive(({ active, deActivate }) => [active, deActivate]);
	const user = useAuth(({ user }) => user);

	return (
		<>
			<Navigators active={active}>
				{navigators.map(navigator => (
					<li key={navigator}>
						<NavLink
							to={navigator === 'Q&A' ? routes.ABOUT : navigator.toLowerCase()}
							style={({ isActive }) => ({
								color: isActive ? 'var(--color-blue-200)' : 'var(--color-gray-700)',
								fontWeight: isActive ? '900' : '500',
							})}
							onClick={deActivate}>
							{navigator}
						</NavLink>
					</li>
				))}
				{isLoggedIn(user) ? (
					<AuthButton
						to={routes.HOME}
						onClick={() => {
							// TODO: signout query
						}}>
						Log Out
					</AuthButton>
				) : (
					<NavLink to={routes.SIGNIN}>Login</NavLink>
				)}
			</Navigators>
		</>
	);
};

const Navigators = styled.ul<{ active: boolean }>`
	position: absolute;
	top: 100px;
	left: 0;
	display: ${({ active }) => (active ? 'flex' : 'none')};
	flex-direction: column;
	gap: 1rem;
	padding: 1.5rem 1rem;
	width: 100%;
	backdrop-filter: blur(8px);
	border-top: 1px solid var(--color-gray-400);
	border-bottom: 1px solid var(--color-gray-400);
	font-size: 1.25rem;
	z-index: 999;

	li {
		a {
			display: block;
			padding: 1rem;
		}
	}
`;

const AuthButton = styled(NavLink)`
	padding: 2rem 1rem 1rem 1rem;
	background-color: var(--color-white);
	border-top: 1px solid var(--color-gray-400);
`;

export default SideNav;
