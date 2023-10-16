import React from "react";
import { useKey } from "../CustomHooks/useKey";

const Search = ({ setQuery }) => {
    const [input, setInput] = React.useState("");
    const inputRef = React.useRef(null);
    useKey(() => {
        inputRef.current.focus();
    }, "enter");

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setQuery(e.target[0].value);
                setInput("");
            }}
        >
            <input
                ref={inputRef}
                className="search"
                type="text"
                placeholder="Search movies..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
};

export default Search;
