import './CategoriesListing.css';
import {Link} from "react-router-dom";
import SingleCategory from "../../single/category/SingleCategory";
import {useCategory} from "../../../categoryContext";

export const CategoriesListing = (data) => {
	const {categories} = useCategory()

	return (
		<div className="container CategoriesListing">
			{categories && categories.map((category, index) => (
				<Link className="card" to={`/products/category/${category.title}`}
					  key={category.title}>
					<SingleCategory value={category}/>
				</Link>
			))}
		</div>
	)
}
