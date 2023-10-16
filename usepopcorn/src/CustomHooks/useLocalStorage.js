import React from "react";

const useLocalStorage = (initialState, key) => {
    const [value, setValue] = React.useState(
        () => JSON.parse(window.localStorage.getItem(key)) || initialState
    );

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export { useLocalStorage };
