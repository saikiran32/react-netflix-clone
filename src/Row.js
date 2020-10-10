import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import youtube from "react-youtube";



const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results)
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]); // to load when page loads and not load again

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}


            </div>

            {/* <YouTube videoId={trailerUrl} opts={opts} /> */}

        </div>
    )
}

export default Row
