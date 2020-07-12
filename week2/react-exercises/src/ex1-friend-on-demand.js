import React, {useState} from "react";
import Button from "./components/Button";
import Profile from "./components/FriendProfile";

export default function Friend() {
    const [friend, setFriend] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const URL = "https://www.randomuser.me/api?results=1";
    const getFriend = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setFriend(data.results[0]);
                setIsLoaded(true);
            });
    };

    return (
        <div className="friend">
            <Button clickHandler={getFriend} />
            <Profile profile={friend} loaded={isLoaded} />
        </div>
    );
}
