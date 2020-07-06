import React, {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const feedback = count > 10 ? "It's higher than 10" : "Keep counting...";
    return (
        <div>
            <p>{feedback}</p>
            <Button counter={clickHandler}></Button>
            <Count count={count}></Count>
        </div>
    );
};

const Button = ({counter}) => {
    return <button onClick={counter}>Add 1!</button>;
};
const Count = ({count}) => {
    return (
        <div>
            <p>{count}</p>
        </div>
    );
};
