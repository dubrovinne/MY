import React from 'react'
import './Header.css'
import './HeaderResponsive.css';
import globeIcon from '../img/Globe.png'
import languageIcon from '../img/Language.png'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='logo'>MY</div>
				<nav className='navigation'>
					<ul>
						<li>
							<a href='#discover'>DISCOVER</a>
						</li>
						<li>
							<a href='#contacts'>CONTACTS</a>
						</li>
						<li>
							<a href='#for-me'>FOR ME</a>
						</li>
					</ul>
				</nav>
				<div className='icons'>
					<a href='#globe'>
						<img src={globeIcon} alt='Globe icon' />
					</a>
					<a href='#language'>
						<img src={languageIcon} alt='Language icon' />
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
