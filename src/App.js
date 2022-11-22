import React, { useState, useEffect } from 'react';
import './App.css';
// Axios
import axios from 'axios';
// Components
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import Spinner from './components/Spinner/Spinner';

const App = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
			);
			setData(result.data);
		};
		fetchData();
		setIsLoading(false);
	}, []);

	return (
		<div className='App'>
			<Header />

			{isLoading ? (
				<Spinner />
			) : (
				<CardComponent
					copyright={data.copyright}
					date={data.date}
					title={data.title}
					img={data.url}
					explanation={data.explanation}
				/>
			)}
		</div>
	);
};

export default App;
