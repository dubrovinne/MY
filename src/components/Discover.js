import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Discover.css'
import './DiscoverResponsive.css'
import jsIcon from '../img/JavaScript.png'
import gitIcon from '../img/Git.png'
import linuxIcon from '../img/Linux.png'
import dbIcon from '../img/Data Encryption.png'
import phpIcon from '../img/PHP.png'
import htmlIcon from '../img/Source Code.png'

const Discover = () => {
	const [isVisible, setIsVisible] = useState(false)
	const containerRef = useRef(null)

	const handleScrollToMoreDetails = () => {
		document
			.getElementById('more-details')
			.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		const currentRef = containerRef.current

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{ threshold: 0.1 }
		)

		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [])

	return (
		<section className='discover'>
			<div className='container__discover' ref={containerRef}>
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1 }}
				>
					DISCOVER
				</motion.h2>
				<div className='skills'>
					<motion.div
						className='skill'
						initial={{ opacity: 0, x: -50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 1 }}
					>
						<img src={jsIcon} alt='JavaScript' />
						<p>JAVASCRIPT</p>
					</motion.div>
					<motion.div
						className='skill'
						initial={{ opacity: 0, x: -50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 1, delay: 0.1 }}
					>
						<img src={gitIcon} alt='Git' />
						<p>GIT</p>
					</motion.div>
					<motion.div
						className='skill'
						initial={{ opacity: 0, x: -50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						<img src={linuxIcon} alt='Linux' />
						<p>LINUX</p>
					</motion.div>
					<motion.div
						className='skill'
						initial={{ opacity: 0, x: -50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						<img src={dbIcon} alt='Database' />
						<p>DATABASE</p>
					</motion.div>
					<motion.div
						className='skill'
						initial={{ opacity: 0, x: -50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 1, delay: 0.4 }}
					>
						<img src={phpIcon} alt='PHP' />
						<p>PHP</p>
					</motion.div>
					<motion.div
						className='skill'
						initial={{ opacity: 0, x: -50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<img src={htmlIcon} alt='HTML & CSS' />
						<p>HTML & CSS</p>
					</motion.div>
				</div>
				<motion.div
					className='more-detailss'
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1 }}
				>
					<button onClick={handleScrollToMoreDetails}>
						MORE AND IN DETAIL
					</button>
				</motion.div>
			</div>
		</section>
	)
}

export default Discover
