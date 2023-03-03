export async function getMovie(input) {
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_KEY}&r=json&t=${input}&plot=full`);

    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}