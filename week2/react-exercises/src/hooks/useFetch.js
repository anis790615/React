import {useState, useEffect} from "react";

// A custom hook was used so that all fetching in the three exercises was done through it. The differences in the exercises were implemented through the parameters passed and according conditions. So the initialState parameter was used to differentiate between arrays and objects as initial states.
function useFetch(url, dependencies, initialState) {
    const [fetchedData, setFetchedData] = useState(initialState);
    // the isLoaded parameter is used to check so not to display anything if no data was fetched yet, mostly used in the first exercises.
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        //  Acheck was make so not to load on component mount, mostly due to exercise description. In the third exercises, the initial state of the counter in the dependency is set to 1 so it fetches immediately.
        if (dependencies[0] !== 0) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    // Differentiating between arrays and objects so to make the hook work for all exercises.
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
