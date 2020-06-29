import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard";
import {ScoreboardButtons} from "./components/ScoreboardButtons";

function App() {
    let [count, setCount] = useState(0);

    let maxValue = 5;

    function addCount() {
        if (count < maxValue) {
            return setCount(count + 1);
        }
    }

    let resetCount = () => {
        setCount(0);
    }

    return (
        <div className="App">
            <div className="Counter">
                <div className="Scoreboard">
                    <Scoreboard count={count} maxValue={maxValue}/>
                </div>
                <div className={"CounterButtons"}>
                    <ScoreboardButtons counter={addCount} title={'inc'} count={count} maxValue = {maxValue}/>
                    <ScoreboardButtons counter={resetCount} title={'reset'} count={count} maxValue = {maxValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
