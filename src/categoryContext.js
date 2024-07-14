import React, {createContext, useContext, useEffect, useState} from 'react';

const CategoryContext = createContext();
export const data_url = process.env.REACT_APP_DATA_URL;

export const fetchData = async (url) => {
	// console.log(url)
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	});
	if (!response.ok) {
		throw Error(response.statusText);
	}
	const data = await response.json();
	return data;
};

const CategoryProvider = ({children}) => {
	const [categories, setCategories] = useState([]);
	const [currentCategory, setCurrentCategories] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			fetchData(`${data_url}category-list.json`, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
			}).then(data => {
				setCategories(data)
			});
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<CategoryContext.Provider value={{categories, currentCategory, setCurrentCategories}}>
			{children}
		</CategoryContext.Provider>
	);
};

const useCategory = () => {
	return useContext(CategoryContext);
};

export {CategoryProvider, useCategory};