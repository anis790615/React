import React, {useState} from "react";
import useFetch from "./hooks/useFetch";
import Joke from "./components/Joke";
import Button from "./components/Button";

function RandomJoke() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const [counter, setCounter] = useState(1);
    const clickHandler = () => {
        setCounter((prevCount) => prevCount + 1);
    };

    const [fetchedData] = useFetch(URL, [counter, true], {});

    return (
        <div className="randomJoke">
            <Joke joke={fetchedData}></Joke>
            <Button onClick={clickHandler}>Another Joke</Button>
        </div>
    );
}

export default RandomJoke;
