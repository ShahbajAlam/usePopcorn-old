import { useEffect } from "react";

const useKey = (callback, key) => {
    const handleKeyDown = (e) => {
        if (e.key.toLowerCase() === key.toLowerCase()) callback();
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
};

export { useKey };
