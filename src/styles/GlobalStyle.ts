import { css } from '@emotion/react';

const GlobalStyle = css`
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
