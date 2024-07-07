import React from 'react'
import './DevelopmentTools.css'

const DevelopmentTools = () => {
	return (
		<section className='development-tools'>
			<div className='container__tools'>
				<h2>DEVELOPMENT TOOLS</h2>
				<div className='tools-grid'>
					<a
						href='https://code.visualstudio.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='tool-item'
					>
						VS CODE
					</a>
					<a
						href='https://www.vim.org/'
						target='_blank'
						rel='noopener noreferrer'
						className='tool-item'
					>
						VIM
					</a>
				</div>
			</div>
		</section>
	)
}

export default DevelopmentTools
