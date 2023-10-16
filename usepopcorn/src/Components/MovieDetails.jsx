import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useKey } from "../CustomHooks/useKey";
const KEY = "c9fea27c";

const MovieDetails = ({ watched, selectedId, onCloseMovie, onAddWatched }) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const isWatched = watched.map((el) => el.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(
        (el) => el.imdbID === selectedId
    )?.userRating;
    useKey(onCloseMovie, "escape");

    const {
        Title: title,
        Poster: poster,
        Runtime: runtime,
        imdbRating: rating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbID: selectedId,
            poster,
            title,
            rating: Number(rating),
            userRating,
            runtime: parseInt(runtime),
        };

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    };

    useEffect(() => {
        const getMovieDetails = async () => {
            setIsLoading(true);
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
            );
            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
        };
        getMovieDetails();
    }, [selectedId]);

    useEffect(() => {
        if (!title) return;
        document.title = `Movie | ${title}`;

        return () => {
            document.title = "usePopcorn";
        };
    }, [title]);

    return (
        <React.Fragment>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="details">
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>
                            &#8678;
                        </button>
                        <img src={poster} alt={`Poster of movie ${title}`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐</span>
                                {rating} IMDb rating
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className="rating">
                            {!isWatched ? (
                                <StarRating onSetRating={setUserRating} />
                            ) : (
                                <p
                                    style={{
                                        textAlign: "center",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    ✌ Already added with rating{" "}
                                    {watchedUserRating}
                                </p>
                            )}
                            {userRating > 0 && (
                                <button className="btn-add" onClick={handleAdd}>
                                    + Add to list
                                </button>
                            )}
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </div>
            )}
        </React.Fragment>
    );
};

export default MovieDetails;
