import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
	createBrowserRouter, RouterProvider,
} from "react-router-dom";
import {CategoriesListing} from "./components/listing/categories/CategoriesListing";
import ProuctsListing from "./components/listing/products/ProuctsListing";
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


]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<CategoryProvider>

		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>
	</CategoryProvider>,
);