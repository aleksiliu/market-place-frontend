import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalStyles = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	width: 600px;
	max-width: 100%;
	height: 400px;
	max-height: 100%;
	z-index: 2;
`;

const ModalOverlay = styled.div`
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

type ModalProps = {
	isShowing: boolean;
	hide: () => void;
};

const Modal: React.FC<ModalProps> = ({ isShowing, hide, children }) =>
	isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<ModalStyles>
						<button
							type='button'
							className='modal-close-button'
							data-dismiss='modal'
							aria-label='Close'
							onClick={hide}
						>
							<span aria-hidden='true'>&times;</span>
						</button>
						<div>{children}</div>
					</ModalStyles>
					<ModalOverlay onClick={hide} />
				</React.Fragment>,
				document.body
		  )
		: null;

export default Modal;
