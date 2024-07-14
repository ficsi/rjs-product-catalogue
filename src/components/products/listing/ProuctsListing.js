import React, {useEffect, useState} from 'react'
import './ProductsListing.css';
import {data_url, fetchData, useCategory} from "../../../categoryContext";
import SingleProduct from "../SingleProduct";
import {Link, useParams} from "react-router-dom";

function ProductsListing() {

	const [products, setProducts] = useState([]);
	const {categories, currentCategory} = useCategory();
	const [loading, setLoading] = useState(true);
	const [limit, setLimit] = useState(4);
	const [skip, setSkip] = useState(0); //TODO: optional
	const [isVisible, setIsVisible] = useState(false);
	const param = useParams()
	const formatText = (title) => {
		if (title === null) {
			title = param.category;
		}
		console.log(title);
		console.log(param)
		return title.toLowerCase()
			.split(' ')
			.join('-');
	}
	//TODO: refactor products fetching
	useEffect(() => {
		try {
			fetchData(`${data_url}products/category/${formatText(currentCategory)}.json?limit=${limit}&skip=${skip}`).then(data => {
				console.log(data);
				setProducts({...data, products: data.products.slice(0, limit)});
				setLoading(false)
			});
		} catch (error) {
			console.log(error);
		}
		setIsVisible(true);
	}, [limit]);

	useEffect(() => {
		if (products?.total <= limit) {
			setIsVisible(false)
		}
	}, [limit, products]);

	const handleLoadMore = () => {
		console.log(loading)
		setLimit(limit + 4);
	};
	const goBack = () => {
		return '/';
	}

	return (
		<>
			<div className="container">

				<Link className={'--back'} to={goBack()}>
					<i> {'<'} </i>back
				</Link>

				<h1 className="title flex ">{currentCategory ? currentCategory : param.category}</h1>
				<hr/>
				<div className="products-list">
					{
						products.products?.map(product =>
							<SingleProduct className="card" key={product.title} product={product}/>,
						)
					}
				</div>

				{isVisible && <button onClick={() => handleLoadMore()} id="load-more">Load more</button>}

			</div>
		</>
	)
}

export default ProductsListing
