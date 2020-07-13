import React from "react";
import PropTypes from "prop-types";

function Joke({joke}) {
    return (
        <div className="joke">
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    );
}

Joke.propTypes = {
    joke: PropTypes.object,
};

export default Joke;
