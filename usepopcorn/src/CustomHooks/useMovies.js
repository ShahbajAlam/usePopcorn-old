import React from "react";
const KEY = "c9fea27c";

const useMovies = (query, page, callback) => {
    const [movies, setMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [totalPages, setTotalPages] = React.useState(null);
    const [totalResults, setTotalResults] = React.useState(0);

    React.useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setError("");
                setIsLoading(true);
                const res = await fetch(
                    `https://www.omdbapi.com/?apikey=${KEY}&s=${query.trim()}&page=${page}&type=movie`
                );
                if (!res.ok)
                    throw new Error(
                        "Something went wrong while fetching movies!"
                    );

                const data = await res.json();
                if (data.Response === "False")
                    throw new Error("Movie not found!");

                setTotalPages(Math.ceil(data.totalResults / 10));
                setTotalResults(data.totalResults);
                setMovies(data.Search);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        if (query) {
            callback();
            fetchMovieData();
        }
    }, [query, page]);

    return [movies, isLoading, error, totalPages, totalResults];
};

export { useMovies };
