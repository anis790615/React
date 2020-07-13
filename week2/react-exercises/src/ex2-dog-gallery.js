import React, {useState} from "react";
import useFetch from "./hooks/useFetch";
import Button from "./components/Button";
import DogPhoto from "./components/DogPhoto";

function DogGallery() {
    const URL = "https://dog.ceo/api/breeds/image/random";
    const [counter, setCounter] = useState(0);
    const clickHandler = () => {
        setCounter((prevCount) => prevCount + 1);
    };
    const [fetchedData] = useFetch(URL, [counter, false], []);

    return (
        <div className="dogGallery">
            <Button onClick={clickHandler}>Get a dog!</Button>
            <div className="galleryWrapper">
                {fetchedData.map((dog, index) => {
                    return <DogPhoto url={dog.message} key={index} />;
                })}
            </div>
        </div>
    );
}

export default DogGallery;
