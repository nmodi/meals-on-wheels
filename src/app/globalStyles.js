import {injectGlobal} from 'styled-components';

injectGlobal `
	@import url('https://fonts.googleapis.com/css?family=Lobster');
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');

	html {
    	box-sizing : border-box;
    	font-size  : 16px;
    	font-family: 'Open Sans', sans-serif;
    }

    *, *:before, *:after {
      	box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
      	margin     : 0;
      	padding    : 0;
      	font-weight: normal;
    }

    ol, ul {
      	list-style: none;
    }

    img {
      	max-width: 100%;
      	height   : auto;
    }
`;
