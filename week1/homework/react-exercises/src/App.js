import React from "react";
import HobbyList from "./ex1-extreme-hobbies.js";
import {Guarantee} from "./ex2-customer-service.js";
import {Counter} from "./ex3-counter.js";
import "./App.css";

function App() {
    return (
        <div className="App">
            <HobbyList />
            <Guarantee
                title="Free Shipping"
                img="/assets/f-delivery.png"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, dignissimos maiores repellat dolore iure obcaecati et fugiat doloribus, praesentium inventore quam? "
            />
            <Guarantee
                title="100% Money Back"
                img="/assets/coin.png"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, dignissimos maiores repellat dolore iure obcaecati et fugiat doloribus, praesentium inventore quam? "
            />
            <Guarantee
                title="Online Support 24/7"
                img="/assets/chat.png"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, dignissimos maiores repellat dolore iure obcaecati et fugiat doloribus, praesentium inventore quam? "
            />

            <br />
            <br />
            <br />
            <Counter />
        </div>
    );
}

export default App;
