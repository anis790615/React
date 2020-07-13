import {useState, useEffect} from "react";

function useFetch(url, dependencies, initialState) {
    const [fetchedData, setFetchedData] = useState(initialState);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (dependencies[0] !== 0) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(fetchedData);
                    if (Array.isArray(initialState)) {
                        setFetchedData([...fetchedData, data]);
                        setIsLoaded(true);
                    } else {
                        setFetchedData(data);
                        setIsLoaded(true);
                    }
                });
        }
    }, dependencies);

    return [fetchedData, isLoaded];
}

export default useFetch;
