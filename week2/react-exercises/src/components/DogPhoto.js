import React from "react";
import PropTypes from "prop-types";

function DogPhoto({url}) {
    return (
        <div className="dogPhoto">
            <img src={url} />
        </div>
    );
}

DogPhoto.propTypes = {
    url: PropTypes.string,
};

export default DogPhoto;
