import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
};

const starContainerStyle = {
    display: "flex",
};

const StarRating = ({
    maxStars = 10,
    color = "#FCC419",
    size = 20,
    messages = [],
    defaultRating = 0,
    onSetRating = () => {},
}) => {
    const [rating, setRating] = React.useState(defaultRating);
    const [tempRating, setTempRating] = React.useState(0);

    const textStyle = {
        color,
        lineHeight: "1",
        margin: "0",
        fontSize: `${size}px`,
        fontWeight: 200,
    };

    const handleRating = (rating) => {
        setRating(rating);
        onSetRating(rating);
    };

    const handleHoverIn = (temp) => {
        setTempRating(temp);
    };

    const handleHoverOut = (temp) => {
        setTempRating(temp);
    };

    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxStars }, (_, i) => (
                    <Star
                        color={color}
                        size={size}
                        key={i}
                        onClick={handleRating.bind(null, i + 1)}
                        isFull={tempRating ? tempRating > i : rating > i}
                        onHoverIn={handleHoverIn.bind(null, i + 1)}
                        onHoverOut={handleHoverOut.bind(null, 0)}
                    />
                ))}
            </div>
            <p style={textStyle}>
                {messages.length === maxStars
                    ? messages[tempRating ? tempRating - 1 : rating - 1]
                    : tempRating || rating || ""}
            </p>
        </div>
    );
};

StarRating.propTypes = {
    maxStars: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    messages: PropTypes.array,
    defaultRating: PropTypes.number,
    onSetRating: PropTypes.func,
};

export default StarRating;
