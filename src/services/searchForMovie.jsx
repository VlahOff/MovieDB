export const fetchMovie = async (title, type, year) => {
	const response = await fetch(
		`https://www.omdbapi.com/?apikey=${
			import.meta.env.VITE_OMDB_KEY
		}&t=${title}&type=${type}&y=${year}&r=json&plot=full`
	);

	return response.json();
};
