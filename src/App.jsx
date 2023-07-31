import { useState, useEffect } from 'react';
import api from './api';
import './App.css';
import { MovieRow } from './components/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([]);



	useEffect(() => {
		const loadMovies = async () => {
			let list = await api.getHomeList();
			setMovieList(list);
		};

		loadMovies();
	}, []);

	return (
		<div className='page'>
        <h1>Movies</h1>
      <section className='lists'>
        {movieList.map((item, key)=>(
         <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
		</div>
	);
}

export default App;
