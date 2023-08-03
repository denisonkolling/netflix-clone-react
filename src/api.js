const API_KEY = 'd5316a5f9b4e93e59f2b2d9ee70d8be8';
const BASE_URL = 'https://api.themoviedb.org/3';

const searchMovies = async (params) => {
	const response = await fetch(`${BASE_URL}${params}`);
	const data = await response.json();

	return data;
};

export default {
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais do Netflix',
				items: await searchMovies(
					`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'trending',
				title: 'Recomendados pra Você',
				items: await searchMovies(
					`/trending/all/week?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'toprated',
				title: 'Em Alta',
				items: await searchMovies(
					`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await searchMovies(
					`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await searchMovies(
					`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await searchMovies(
					`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await searchMovies(
					`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'documentary',
				title: 'Documentários',
				items: await searchMovies(
					`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
				),
			},
		];
	},

	getMovieInfo: async (movieId, type) => {
		let info = {};

		if (movieId) {
			switch (type) {
				case 'movie':
					info = await searchMovies(
						`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
					);
					break;
				case 'tv':
					info = await searchMovies(
						`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
					);
					break;
				default:
					info = null;
					break;
			}
		}
		return info;
	},
};
