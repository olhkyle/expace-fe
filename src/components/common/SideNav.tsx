import styled from '@emotion/styled';
import { navigators } from '../../constants/navigators';
import { NavLink } from 'react-router-dom';
import { ABOUT } from '../../constants/routes';
import useSideNavActive from '../../store/useToggleState';

const SideNav = () => {
	const [active, deActivate] = useSideNavActive(({ active, deActivate }) => [active, deActivate]);

	return (
		<>
			<Navigators active={active}>
				{[...navigators, 'SignUp'].map(navigator => (
					<li key={navigator}>
						<NavLink
							to={navigator === 'Q&A' ? ABOUT : navigator.toLowerCase()}
							style={({ isActive }) => ({
								color: isActive ? 'var(--color-blue-200)' : 'var(--color-gray-700)',
								fontWeight: isActive ? '900' : '500',
							})}
							onClick={deActivate}>
							{navigator}
						</NavLink>
					</li>
				))}
				{/*login 사용자인경우 프로필 명과 로그아웃 버튼 보이기*/}
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
		&:last-child {
			padding-top: 2rem;
			background-color: var(--color-white);
			border-top: 1px solid var(--color-gray-400);
		}

		a {
			display: block;
			padding: 1rem;
		}
	}
`;

export default SideNav;
