import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import Header from './components/Header'
import './components/HeaderResponsive.css'
import './components/DiscoverResponsive.css'
import Discover from './components/Discover'
import './components/Discover.css'
import Process from './components/Process'
import SocialGraph from './components/SocialGraph'
import Forme from './components/Forme'
import MoreDetails from './components/MoreDetails'
import DevelopmentTools from './components/DevelopmentTools'
import './components/SimpleBar.css'
import './App.css'
import './fonts/stylesheet.css'
import './components/i18n'

function App() {
	useTranslation()

	useEffect(() => {
		const timer = setTimeout(() => {}, 100)
		return () => clearTimeout(timer)
	}, [])

	return (
		<SimpleBar
			style={{ maxHeight: '100vh' }}
			scrollableNodeProps={{ id: 'scroll-container' }}
		>
			<div className='App'>
				<Header />
				<div id='discover'>
					<Discover />
				</div>
				<div id='process'>
					<Process />
				</div>
				<div id='contacts'>
					<SocialGraph />
				</div>
				<div id='for-me'>
					<Forme />
				</div>
				<div id='more-details'>
					<MoreDetails />
				</div>
				<div id='development-tools'>
					<DevelopmentTools />
				</div>
				{}
			</div>
		</SimpleBar>
	)
}

export default App
