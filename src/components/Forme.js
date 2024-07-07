import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Forme.css'
import screenshot from '../img/Screen.png'

const Forme = () => {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef()

	useEffect(() => {
		const currentRef = ref.current

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
		<section id='for-me' className='forme'>
			<div className='container__forme'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1 }}
					className='text'
				>
					<h2>FOR ME</h2>
					<p>
						I am currently a student at Novosibirsk State Technical University
						(NSTU), where I am dedicated to my studies and constantly seeking to
						expand my knowledge and skills. Alongside my academic pursuits, I am
						actively involved in freelancing, taking on various projects that
						allow me to apply what I've learned in a real-world context.
					</p>
					<p>
						For the past two years, I have been working in the outsourcing
						industry, gaining valuable experience and honing my expertise. This
						experience has provided me with a deep understanding of client needs
						and the ability to deliver high-quality work consistently. My work
						in outsourcing has also taught me the importance of communication,
						time management, and meeting deadlines, which are crucial skills in
						any professional setting.
					</p>
					<p>
						Balancing my studies, freelance projects, and outsourcing work has
						made me a well-rounded individual who is prepared to tackle any
						challenge. I am passionate about my field and excited to continue
						growing both academically and professionally.
					</p>
				</motion.div>
				<div className='image'>
					<img src={screenshot} alt='Screenshot' />
				</div>
			</div>
		</section>
	)
}

export default Forme
