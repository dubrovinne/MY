import React from 'react'
import './SocialGraph.css'
import socialGraphImage from '../img/Graph.png'
import socialGitImage from '../img/Git.png'
import socialEmailImage from '../img/email.png'
import socialStackImage from '../img/stack.png'
import socialTgImage from '../img/tg.png'

const SocialGraph = () => {
	return (
		<section id='contacts' className='social-container'>
			<div className='container__social'>
				<h2 className='social-title'>SOCIAL</h2>
				<img
					src={socialGraphImage}
					alt='Social Graph'
					className='social-image social-image-graph'
				/>
				<a
					href='https://github.com/dubrovinne'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={socialGitImage}
						alt='Social Git'
						className='social-image social-icon social-image-git'
					/>
				</a>
				<a href='mailto:vladmir.dubrovin322@gmail.com'>
					<img
						src={socialEmailImage}
						alt='Social EMAIL'
						className='social-image social-icon social-image-email'
					/>
				</a>
				<a
					href='https://stackoverflow.com/users/26039594/vladimir'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={socialStackImage}
						alt='Social STACK'
						className='social-image social-icon social-image-stack'
					/>
				</a>
				<a
					href='https://t.me/@dubrovinne'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={socialTgImage}
						alt='Social TG'
						className='social-image social-icon social-image-tg'
					/>
				</a>
			</div>
		</section>
	)
}

export default SocialGraph
