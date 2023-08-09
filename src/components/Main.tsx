import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface MainProps extends HTMLAttributes<HTMLElement> {
	onClick: () => void;
}

const Main = ({ onClick, ...props }: MainProps) => {
	return <MainComponent onClick={onClick} {...props} />;
};

const MainComponent = styled.main`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	padding: 0 1rem;
	height: calc(100vh - 100px);

	@media screen and (min-width: 640px) {
		width: 640px;
	}

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1024px) {
		width: 1024px;
	}

	@media screen and (min-width: 1280px) {
		width: 1280px;
	}
`;

export default Main;
