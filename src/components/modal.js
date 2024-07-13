import React, {useEffect} from 'react'
import './modal.css';
import {useCategory} from "../categoryContext";

function Modal({visible, setVisible, details}) {
	const {thumbnail, rating, title, price, category, description, tags} = details;
	const handleModal = (event) => {
		console.log(thumbnail)
		if (visible) {
			visible.setShowModal(!visible)
		}
	}
	return (
		<div className="overlay" onClick={handleModal}>
			<div className="top">
				<img src={thumbnail} alt=""/>
			</div>
			<div id="dialog">
				<button aria-label="close" className="x">❌</button>
				<h2>{title}</h2>
				<p>{description}</p>

				<div className="bottom">
					<hr/>
					<hr/>
					<p className='tags'>
						{tags.map(tag => <i>{tag}</i>)}
					</p>
					</div>
			</div>
		</div>
	)
}

export default Modal
