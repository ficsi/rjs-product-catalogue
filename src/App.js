import './App.css';
import {CategoriesListing} from "./components/listing/categories/CategoriesListing";
import {useContext} from "react";
import {CategoryProvider, useCategory} from "./categoryContext";



function App() {
	return (
		<CategoryProvider>
			<div className="App">
				{/*<h1 className="title"></h1>*/}
				<CategoriesListing />
			</div>
		</CategoryProvider>
	);
}

export default App;
