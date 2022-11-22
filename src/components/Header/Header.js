import React from 'react';
import './Header.css';

import img from './NASA_logo.svg.png';

const Header = ({ title }) => {
	return (
		<div className='Header'>
			<h1>{title}</h1>
			<img src={img} alt='Logo Nasa' width='180px' />
		</div>
	);
};

Header.defaultProps = {
	title: 'NASA App',
};

export default Header;
