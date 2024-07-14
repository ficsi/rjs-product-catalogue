import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
	createBrowserRouter, RouterProvider,
} from "react-router-dom";
import {CategoriesListing} from "./components/categories/listing/CategoriesListing";
import ProuctsListing from "./components/products/listing/ProuctsListing";
import {CategoryProvider} from "./categoryContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CategoriesListing/>,
		errorElement: <div>invalid route</div>,
		children: [],
	}, {
		path: "/products/category/:category",
		element: <ProuctsListing/>,
		errorElement: <div>invalid route</div>,
	},
	{
		path:"/*",
		element: <CategoriesListing/>,
	}


]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<CategoryProvider>

		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>
	</CategoryProvider>,
);