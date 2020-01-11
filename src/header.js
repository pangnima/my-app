import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
	return (
		<div>
			<Link to="/">HOME</Link>
			<Link to="/form">FORM</Link>
			<Link to="/adfdf">ERROR</Link>
		</div>
	)
}

export default Header
