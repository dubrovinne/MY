import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root') 

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Confirmation Modal'
			className='modal'
			overlayClassName='overlay'
		>
			<h2>Подтверждение</h2>
			<p>Хотите перейти на сайт разработчика?</p>
			<button onClick={onConfirm}>Да</button>
			<button onClick={onRequestClose}>Нет</button>
		</Modal>
	)
}

export default ConfirmationModal
