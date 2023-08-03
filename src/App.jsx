import { useState, useEffect } from 'react';
import api from './api';
import './App.css';
import { MovieRow } from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {

	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);

	useEffect(() => {
		const loadMovies = async () => {
			let list = await api.getHomeList();
			setMovieList(list);

			let originals = list.filter(i=>i.slug === 'originals');
			let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
			let chosen = originals[0].items.results[randomChosen];
			console.log(chosen)
			let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');
			setFeaturedData(chosenInfo);			
		};
		loadMovies();
	}, []);

		
	return (
		<div className="page">

			{featuredData && <FeaturedMovie item={featuredData}/>}

			<section className="lists">
				{movieList.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items} />
				))}
			</section>
		</div>
	);
}

export default App;
