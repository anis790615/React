import React from "react";

export const Guarantee = ({title, img, description}) => {
    return (
        <div className="guarantee">
            <img src={img} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};
