import './App.css';
import {CategoriesListing} from "./components/categories/listing/CategoriesListing";
import {CategoryProvider} from "./categoryContext";



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
