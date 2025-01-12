import { useState } from "react";


function Counter() {
    const [increment, setIncrement] = useState();
    const [decrement, setDecrement] = useState();
    const [count, setCount] = useState(0);
    const [reset, setReset] = useState();

    const handleCount = () => {
        setCount(count + 1);
        

       
    }
    const handleDecrement = () => {
            if (count === 0)
                alert("Cannot decrement below zero");
            else {
                setCount(count - 1);
            }
        };

        

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="counter">
            
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <div>
                <button onClick={handleCount}>Increase</button>
                <button onClick={handleDecrement}>Decrease</button>
                <button onClick={resetCount}>Reset</button>
                
            </div>
            </div>
            
            
    )
};

export default Counter;