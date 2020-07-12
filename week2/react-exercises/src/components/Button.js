import React from "react";
import PropTypes from "prop-types";

export default function Button({clickHandler}) {
    return (
        <button className="friendButton" onClick={clickHandler}>
            Get a friend!
        </button>
    );
}
Button.propTypes = {
    clickHandler: PropTypes.func.isRequired,
};
