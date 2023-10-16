import React from "react";

const NumberOfResults = ({ totalResults }) => {
    return (
        <React.Fragment>
            {totalResults > 0 && (
                <p className="num-results">
                    Found <strong>{totalResults}</strong> results
                </p>
            )}
        </React.Fragment>
    );
};

export default NumberOfResults;
