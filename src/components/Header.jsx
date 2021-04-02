import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import '../assets/styles/Header.scss'
const Header = () => {
	return(
		<div className="header">
			<Logo/>
			<Menu/>
		</div>
	)
} 

export default Header
