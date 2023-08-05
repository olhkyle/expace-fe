import { css } from '@emotion/react';

const GlobalStyle = css`
	:root {
		font-weight: 400;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;

		--color-black: #191a20;
		--color-white: #fff;

		--color-gray-50: #f7f7f7;
		--color-gray-100: #f9fafb;
		--color-gray-200: #f5f3f0;
		--color-gray-300: #eff0ec;
		--color-gray-400: #e7e7e9;
		--color-gray-500: #818890;
		--color-gray-600: #4b4c53;
		--color-gray-700: #3a3d4a;
		--color-gray-800: #2e3039;
		--color-gray-900: #1f2028;

		--color-green-100: #76e4b8;
		--color-green-200: #3fd599;
		--color-green-300: #15c47e;
		--color-green-400: #0e7b6c;

		--color-blue-100: #0687f0;
		--color-blue-200: #2272eb;
		--color-blue-300: #e8f2ff;

		--color-purple: #6466f1;

		--color-yellow: #ffd644;

		--color-orange-100: #ffa927;
		--color-orange-200: #fe9800;

		--color-red: #ff4545;
		--color-dark: #090b16;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		font-family: 'DM Mono', monospace;
		font-family: 'Schibsted Grotesk', sans-serif;
	}

	body[data-theme='light'] {
		--font-color: #000;
		--body-bg-color: #fff;
	}

	body[data-theme='dark'] {
		--font-color: #fff;
		--body-bg-color: #000;
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		width: 100%;
		height: 100%;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		font-size: 1em;
		font-weight: normal;
	}

	ul,
	ol,
	li {
		padding-left: 0;
		list-style-type: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	a,
	button {
		cursor: pointer;
	}

	button,
	input,
	select,
	textarea {
		background-color: transparent;
		border: 0;
		&:focus {
			outline: none;
			box-shadow: none;
		}
	}
`;

export default GlobalStyle;
