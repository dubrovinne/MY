import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import './Header.css'
import './HeaderResponsive.css'

const Header = () => {
	const { t, i18n } = useTranslation()
	const [dropdownVisible, setDropdownVisible] = useState(false)
	const [currentLang, setCurrentLang] = useState('EN')

	const changeLanguage = (lng, label) => {
		i18n.changeLanguage(lng)
		setCurrentLang(label)
		setDropdownVisible(false)
	}

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible)
	}

	return (
		<header className='header'>
			<div className='container'>
				<div className='logo'>MY</div>
				<nav className='navigation'>
					<ul>
						<li>
							<Link
								to='discover'
								containerId='scroll-container'
								smooth={true}
								duration={500}
							>
								{t('discover')}
							</Link>
						</li>
						<li>
							<Link
								to='contacts'
								containerId='scroll-container'
								smooth={true}
								duration={500}
							>
								{t('contacts')}
							</Link>
						</li>
						<li>
							<Link
								to='for-me'
								containerId='scroll-container'
								smooth={true}
								duration={500}
							>
								{t('for_me')}
							</Link>
						</li>
					</ul>
				</nav>
				<div className='icons'>
					<a href='#dark'>DARK</a>
					<div className='language-dropdown'>
						<div className='current-lang' onClick={toggleDropdown}>
							{currentLang}
						</div>
						{dropdownVisible && (
							<div className='dropdown'>
								<div onClick={() => changeLanguage('en', 'EN')}>EN</div>
								<div onClick={() => changeLanguage('ru', 'RU')}>RU</div>
								<div onClick={() => changeLanguage('cs', 'CS')}>CS</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
