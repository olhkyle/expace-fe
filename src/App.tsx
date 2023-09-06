import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { Layout } from './components';
import { Home, Reservation, SignIn, SignUp, Space, About, ForgotPassword } from './pages';
import { routes } from './constants/routes';
import AuthenticationGuard from './components/AuthenticationGuard';
import { NavermapsProvider } from 'react-naver-maps';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			// suspense: true,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/signin',
				element: <SignIn />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/password-resets',
				element: <ForgotPassword />,
			},
			{
				path: '/space',
				element: <Space />,
			},
			{
				path: '/reservation',
				element: <AuthenticationGuard redirectTo={routes.SIGNIN} element={<Reservation />} />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return (
		<NavermapsProvider ncpClientId={import.meta.env.VITE_NAVER_MAP_API_CLIENTID}>
			<QueryClientProvider client={queryClient}>
				<Global styles={GlobalStyle} />
				<RouterProvider router={router} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</NavermapsProvider>
	);
};

export default App;
