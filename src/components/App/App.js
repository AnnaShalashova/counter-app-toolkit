import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {increment, decrement } from "../../slices/counterSlice";

const App = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button arial-label="Increment Value" 
                    onClick={() => dispatch(increment())}>
                    Прибавить
                </button>
                <span>{count}</span>
                <button atial-label="Decrement Value"
                    onClick={() => dispatch(decrement())}>
                    Отнять
                </button>
            </div>
        </div>
    );
};

export default App;

