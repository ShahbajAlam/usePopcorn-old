import React from "react";
import Movie from "./Movie";

const MovieList = ({
    movies,
    onSelectMovie,
    page,
    onPageChange,
    totalPages,
    totalResults,
}) => {
    const handleIncrease = () => {
        onPageChange(page + 1);
    };

    const handleDecrease = () => {
        onPageChange(page - 1);
    };

    return (
        <React.Fragment>
            <ul className="list list-movies">
                {movies?.map((movie) => (
                    <Movie
                        movie={movie}
                        key={movie.imdbID}
                        onSelectMovie={onSelectMovie}
                    />
                ))}
            </ul>
            {totalResults > 10 && (
                <div className="pagination">
                    <h1
                        style={{ fontSize: "3rem", cursor: "pointer" }}
                        role="button"
                        onClick={handleDecrease}
                    >
                        &#8678;
                    </h1>
                    <h2>
                        Page {page}/{totalPages}
                    </h2>
                    <h1
                        style={{ fontSize: "3rem", cursor: "pointer" }}
                        role="button"
                        onClick={handleIncrease}
                    >
                        &#8680;
                    </h1>
                </div>
            )}
        </React.Fragment>
    );
};

export default MovieList;
