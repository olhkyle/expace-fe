import { Outlet } from 'react-router-dom';
import { Main, Nav } from '.';
import useSideNavActive from '../store/useToggleState';

const Layout = () => {
	const deActivate = useSideNavActive(({ deActivate }) => deActivate);

	return (
		<>
			<Nav />
			<Main onClick={deActivate}>
				<Outlet />
			</Main>
		</>
	);
};

export default Layout;
