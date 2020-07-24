import React from "react";
import PropTypes from "prop-types";

function DogPhoto({ url }) {
  return (
    <div className="dogPhoto">
      <img src={url} alt="A photo of a dog" />
    </div>
  );
}

DogPhoto.propTypes = {
  url: PropTypes.string,
};

export default DogPhoto;
