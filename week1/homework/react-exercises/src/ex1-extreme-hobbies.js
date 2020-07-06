import React from "react";

const Hobby = ({hobby}) => {
    return <li>{hobby}</li>;
};

const HobbyList = () => {
    const hobbies = [
        "Surfing",
        "Rock climbing",
        "Mountain biking",
        "Breakdancing",
    ];
    return (
        <ul>
            {hobbies.map((hobby, index) => {
                return <Hobby hobby={hobby} key={"hobby_" + index} />;
            })}
        </ul>
    );
};
export default HobbyList;
