import React from 'react'
import logoImg from '../assets/static/triangleLogo.png'
const Logo = () => {
	return(
		<div className="logo">
			<img src={logoImg} alt="" />
			<span>windbnb</span>
		</div>
	)
}

export default Logo
