import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Process.css'

const Process = () => {
	const [isVisible, setIsVisible] = useState(false)
	const containerRef = useRef(null)

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
	}, [containerRef])

	return (
		<section className='process'>
			<div className='container__process' ref={containerRef}>
				<motion.h2
					className='methodology'
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1 }}
				>
					METHODOLOGY
				</motion.h2>
				<motion.h2
					className='my-process'
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.1 }}
				>
					MY PROCESS
				</motion.h2>
				<div className='phases'>
					<motion.div
						className='phase'
						initial={{ opacity: 0, y: 50 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						<h3>PHASE 1</h3>
						<h4>DISCOVERY</h4>
						<p>
							This is the phase where I dive deep into your world and get to
							know you. Before I can provide the best solution for your website,
							I need to understand you, your pain points, and your audience.
						</p>
					</motion.div>
					<motion.div
						className='phase'
						initial={{ opacity: 0, y: 50 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						<h3>PHASE 2</h3>
						<h4>RESEARCH</h4>
						<p>
							In this phase, I analyze the market, study competitors, and gather
							insights to inform the design process. Understanding the landscape
							helps in creating a website that stands out and meets industry
							standards.
						</p>
					</motion.div>
					<motion.div
						className='phase'
						initial={{ opacity: 0, y: 50 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 1, delay: 0.4 }}
					>
						<h3>PHASE 3</h3>
						<h4>PLANNING</h4>
						<p>
							Based on the discovery and research phases, I create a strategic
							plan outlining the project's scope, timeline, and resources. This
							ensures a clear roadmap for the design and development process.
						</p>
					</motion.div>
					<motion.div
						className='phase'
						initial={{ opacity: 0, y: 50 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<h3>PHASE 4</h3>
						<h4>DESIGN</h4>
						<p>
							I take what I've learned about you and craft a responsive website
							that's tailored to meet your unique needs. My goal is to create an
							experience that reflects your brand and keeps things aesthetically
							pleasing and usable for your audience.
						</p>
					</motion.div>
					<motion.div
						className='phase'
						initial={{ opacity: 0, y: 50 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 1, delay: 0.6 }}
					>
						<h3>PHASE 5</h3>
						<h4>DEVELOPMENT</h4>
						<p>
							Once the design is approved, I proceed with building the website.
							This phase includes coding, integrating functionalities, and
							ensuring the site is optimized for performance, security, and
							reliability.
						</p>
					</motion.div>
					<motion.div
						className='phase'
						initial={{ opacity: 0, y: 50 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 1, delay: 0.7 }}
					>
						<h3>PHASE 6</h3>
						<h4>TESTING & LAUNCH</h4>
						<p>
							Before the website goes live, I conduct thorough testing to ensure
							everything works smoothly and meets the required standards. Once
							testing is complete, the website is launched, and post-launch
							support is provided to address any immediate concerns.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Process
