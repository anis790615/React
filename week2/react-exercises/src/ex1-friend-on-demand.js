import React, {useState} from "react";
import Button from "./components/Button";
import Profile from "./components/FriendProfile";
import useFetch from "./hooks/useFetch";

export default function Friend() {
    const URL = "https://www.randomuser.me/api?results=1";
    const [counter, setCounter] = useState(0);
    const clickHandler = () => {
        setCounter((prevCount) => prevCount + 1);
    };
    // const [isLoaded, setIsLoaded] = useState(false);

    const [fetchedData, isLoaded] = useFetch(URL, [counter], {});
    // console.log(fetchedData.results[0]);

    return (
        <div className="friend">
            <Button onClick={clickHandler}>Get a Friend!</Button>
            <Profile profile={fetchedData} loaded={isLoaded} />
        </div>
    );
}
