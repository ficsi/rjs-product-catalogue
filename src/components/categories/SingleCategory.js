import React from 'react'
import './SingleCategory.css'
import {useCategory} from "../../categoryContext";

function SingleCategory({value}) {
	const {title, thumb} = value;

	const {categories, setCurrentCategories} = useCategory()

	const updateCurrentCategoryContext = (category) => {
		setCurrentCategories(category)
	}

	return (
		<div onClick={() => updateCurrentCategoryContext(title)} className="cover item-a"
			 style={{backgroundImage: `url(${thumb})`}}>
			<h1>{title}</h1>
			<div className="card-back">
			</div>
		</div>
	)
}

export default SingleCategory
