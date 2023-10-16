const WatchedSummary = ({ average, watched }) => {
    const avgImdbRating = average(watched.map((movie) => movie.rating)).toFixed(
        2
    );
    const avgUserRating = average(
        watched.map((movie) => movie.userRating)
    ).toFixed(2);
    const avgRuntime = average(watched.map((movie) => movie.runtime)).toFixed(
        2
    );

    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span style={{ textAlign: "center" }}>
                        {watched.length} movies
                    </span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span style={{ textAlign: "center" }}>
                        {avgRuntime} min
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WatchedSummary;
