import React, { useState } from "react";
import Button from "./components/Button";
import Profile from "./components/FriendProfile";
import useFetch from "./hooks/useFetch";

export default function Friend() {
  // a variable for url
  const URL = "https://www.randomuser.me/api?results=1";
  // Due to using a custom hook for fetching data, the onclick action was set to change the dependency that triggers the useEffect, and thus, the state counter, and the clickHandler that increases the count were made to make use of such approach
  const [counter, setCounter] = useState(0);
  const clickHandler = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  // I decided to go with a custom hook, in part to try implenting it, and also due unify the fetches in all three exercises, and minimize their dfferences.
  const [fetchedData, isLoaded] = useFetch(URL, [counter, false], {});

  return (
    <div className="friend">
      <Button onClick={clickHandler}>Get a Friend!</Button>
      {isLoaded && <Profile data={fetchedData} />}
    </div>
  );
}
