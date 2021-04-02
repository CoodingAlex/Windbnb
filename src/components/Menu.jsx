import React from 'react'
import findLogo from '../assets/static/magnifying-glass.svg'
const Menu = () => {
	return(
		<div className="menu">
			<input className="menu-location" placeholder="Location"/>
			<input className="menu-guests" placeholder="Add Guests"/>
			<div>
				<img src={findLogo} className="menu-icon-find"/>
			</div>
		</div>
	)
} 

export default Menu
