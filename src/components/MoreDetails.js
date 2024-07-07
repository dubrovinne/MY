import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ConfirmationModal from './ConfirmationModal'
import './ConfirmationModal.css'
import './MoreDetails.css'

const MoreDetails = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [targetUrl, setTargetUrl] = useState('')
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef()

	useEffect(() => {
		const currentRef = ref.current

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.unobserve(currentRef)
				}
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

	const handleLinkClick = (e, url) => {
		e.preventDefault()
		setTargetUrl(url)
		setIsModalOpen(true)
	}

	const handleConfirm = () => {
		window.open(targetUrl, '_blank', 'noopener noreferrer')
		setIsModalOpen(false)
	}

	return (
		<section className='more-details'>
			<div className='container__more-details'>
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
					ref={ref}
				>
					MORE AND IN DETAIL
				</motion.h2>
				<div className='details-grid'>
					<div className='detail-row'>
						<motion.a
							href='https://www.javascript.com/'
							onClick={e => handleLinkClick(e, 'https://www.javascript.com/')}
							className='detail-item special-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.1 }}
						>
							JAVASCRIPT
						</motion.a>
						<motion.a
							href='https://reactjs.org/'
							onClick={e => handleLinkClick(e, 'https://reactjs.org/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.2 }}
						>
							REACT.JS
						</motion.a>
						<motion.a
							href='https://nodejs.org/'
							onClick={e => handleLinkClick(e, 'https://nodejs.org/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.3 }}
						>
							NODE.JS
						</motion.a>
						<motion.a
							href='https://expressjs.com/'
							onClick={e => handleLinkClick(e, 'https://expressjs.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.4 }}
						>
							EXPRESS.JS
						</motion.a>
						<motion.a
							href='https://www.emui.com/'
							onClick={e => handleLinkClick(e, 'https://www.emui.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.5 }}
						>
							EMUI.JS
						</motion.a>
					</div>
					<div className='detail-row'>
						<motion.a
							href='https://git-scm.com/'
							onClick={e => handleLinkClick(e, 'https://git-scm.com/')}
							className='detail-item special-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.1 }}
						>
							GIT
						</motion.a>
						<motion.a
							href='https://www.gitkraken.com/'
							onClick={e => handleLinkClick(e, 'https://www.gitkraken.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.2 }}
						>
							GITKRAKEN
						</motion.a>
						<motion.a
							href='https://bitbucket.org/'
							onClick={e => handleLinkClick(e, 'https://bitbucket.org/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.3 }}
						>
							BITBUCKET
						</motion.a>
					</div>
					<div className='detail-row'>
						<motion.a
							href='https://www.linux.org/'
							onClick={e => handleLinkClick(e, 'https://www.linux.org/')}
							className='detail-item special-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.1 }}
						>
							LINUX
						</motion.a>
						<motion.a
							href='https://www.debian.org/'
							onClick={e => handleLinkClick(e, 'https://www.debian.org/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.2 }}
						>
							DEBIAN/UBUNTU
						</motion.a>
						<motion.a
							href='https://www.centos.org/'
							onClick={e => handleLinkClick(e, 'https://www.centos.org/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.3 }}
						>
							CENTOS/RHEL
						</motion.a>
						<motion.a
							href='https://www.nginx.com/'
							onClick={e => handleLinkClick(e, 'https://www.nginx.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.4 }}
						>
							NGINX & APACHE
						</motion.a>
						<motion.a
							href='https://www.elastic.co/what-is/elk-stack'
							onClick={e =>
								handleLinkClick(e, 'https://www.elastic.co/what-is/elk-stack')
							}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.5 }}
						>
							ELK STACK
						</motion.a>
					</div>
					<div className='detail-row'>
						<motion.a
							href='https://www.mysql.com/'
							onClick={e => handleLinkClick(e, 'https://www.mysql.com/')}
							className='detail-item special-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.1 }}
						>
							DATABASE
						</motion.a>
						<motion.a
							href='https://www.postgresql.org/'
							onClick={e => handleLinkClick(e, 'https://www.postgresql.org/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.2 }}
						>
							POSTGRESQL
						</motion.a>
						<motion.a
							href='https://www.mongodb.com/'
							onClick={e => handleLinkClick(e, 'https://www.mongodb.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.3 }}
						>
							MONGODB
						</motion.a>
						<motion.a
							href='https://firebase.google.com/'
							onClick={e => handleLinkClick(e, 'https://firebase.google.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.4 }}
						>
							FIREBASE
						</motion.a>
					</div>
					<div className='detail-row'>
						<motion.a
							href='https://www.php.net/'
							onClick={e => handleLinkClick(e, 'https://www.php.net/')}
							className='detail-item special-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.1 }}
						>
							PHP
						</motion.a>
						<motion.a
							href='https://laravel.com/'
							onClick={e => handleLinkClick(e, 'https://laravel.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.2 }}
						>
							LARAVEL
						</motion.a>
						<motion.a
							href='https://www.yiiframework.com/'
							onClick={e => handleLinkClick(e, 'https://www.yiiframework.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.3 }}
						>
							YII
						</motion.a>
					</div>
					<div className='detail-row'>
						<motion.a
							href='https://developer.mozilla.org/en-US/docs/Web/HTML'
							onClick={e =>
								handleLinkClick(
									e,
									'https://developer.mozilla.org/en-US/docs/Web/HTML'
								)
							}
							className='detail-item special-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.1 }}
						>
							HTML & CSS
						</motion.a>
						<motion.a
							href='https://getbootstrap.com/'
							onClick={e => handleLinkClick(e, 'https://getbootstrap.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.2 }}
						>
							BOOTSTRAP 5
						</motion.a>
						<motion.a
							href='https://sass-lang.com/'
							onClick={e => handleLinkClick(e, 'https://sass-lang.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.3 }}
						>
							SASS/SCSS
						</motion.a>
						<motion.a
							href='https://semantic-ui.com/'
							onClick={e => handleLinkClick(e, 'https://semantic-ui.com/')}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.4 }}
						>
							SEMANTIC UI
						</motion.a>
					</div>
					<div className='detail-row'>
						<motion.a
							href='https://www.docker.com/'
							onClick={e => handleLinkClick(e, 'https://www.docker.com/')}
							className='detail-item special-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.1 }}
						>
							DOCKER
						</motion.a>
						<motion.a
							href='https://docs.docker.com/engine/reference/builder/'
							onClick={e =>
								handleLinkClick(
									e,
									'https://docs.docker.com/engine/reference/builder/'
								)
							}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.2 }}
						>
							DOCKERFILE
						</motion.a>
						<motion.a
							href='https://docs.docker.com/compose/'
							onClick={e =>
								handleLinkClick(e, 'https://docs.docker.com/compose/')
							}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.3 }}
						>
							DOCKER COMPOSE
						</motion.a>
						<motion.a
							href='https://docs.docker.com/engine/swarm/'
							onClick={e =>
								handleLinkClick(e, 'https://docs.docker.com/engine/swarm/')
							}
							className='detail-item'
							initial={{ opacity: 0, y: 50 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1, delay: 0.4 }}
						>
							DOCKER SWARM
						</motion.a>
					</div>
				</div>
			</div>
			<ConfirmationModal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				onConfirm={handleConfirm}
			/>
		</section>
	)
}

export default MoreDetails
