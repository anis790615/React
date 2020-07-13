import React from "react";
import "./App.css";
import Friend from "./ex1-friend-on-demand";
import DogGallery from "./ex2-dog-gallery";
import RandomJoke from "./ex3-random-joke";

function App() {
    return (
        <div className="App">
            <Friend />
            <DogGallery />
            <RandomJoke />
        </div>
    );
}

export default App;
