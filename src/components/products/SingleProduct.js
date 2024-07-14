import './SingleProduct.css';
import React, {useEffect, useState} from 'react'
import Modal from "../modal";

function SingleProduct({product, isLoading}) {
	const productCard = React.createRef();
	const {title, price, thumbnail} = product;
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			productCard?.current?.classList.add('visible');
		}, 500)
	}, [product]);

	const handleInfoPopUp = (event) => {
		setShowModal(!showModal);
	}
	return (
		<>
			<div ref={productCard} className={"product-card"} onClick={(e) => handleInfoPopUp(e)}>
				<div className="main">
					<img className="product-card_image"
						 src={thumbnail}
						 alt={title}/>
					<h2 className="product-card_title">{title}</h2>
					<hr/>
					<div className="product-card_info">
						<div className="--price">
							<p>{price}</p>
						</div>
					</div>
				</div>
			</div>
			{showModal ? <Modal visible={{showModal, setShowModal}} details={product}/> : null}
		</>
	)
}

export default SingleProduct
