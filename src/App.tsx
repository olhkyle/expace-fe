import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { Layout } from './components';
import { Home, Reservation, SignIn, SignUp, Space, About } from './pages';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			suspense: true,
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
				path: '/space',
				element: <Space />,
			},
			{
				path: '/reservation',
				element: <Reservation />,
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
		<QueryClientProvider client={queryClient}>
			<Global styles={GlobalStyle} />
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
