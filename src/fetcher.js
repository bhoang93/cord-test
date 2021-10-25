import axios from "axios";

const baseUrl = `https://api.themoviedb.org/3/`;
const apiKey = `713959414f4e3dfbe46802b6e4a92999`;

// All of your API requests should be in this file
export const getPopularMovies = (
  setResults,
  setTotalCount,
  setLoadedResults
) => {
  axios
    .get(`${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
    .then((resp) => {
      setResults(resp.data.results);
      setLoadedResults(resp.data.results);
      setTotalCount(resp.data.total_results);
    });
};

export const getGenreList = (setGenreOptions) => {
  axios.get(`${baseUrl}genre/movie/list?api_key=${apiKey}`).then((resp) => {
    setGenreOptions(resp.data.genres);
  });
};

export const getMovieSearch = (keyword, year, setResults, setTotalCount) => {
  axios
    .get(
      `${baseUrl}search/movie/?api_key=${apiKey}${
        keyword ? `&query=${keyword}` : ""
      }${year ? `&year=${year}` : ""}
      `
    )
    .then((resp) => {
      setResults(resp.data.results);
      setTotalCount(resp.data.total_results);
    })
    .catch((err) => console.log(err));
};
