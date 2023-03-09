import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementByAmount} from './counterSlice';

export default function IncrementByAmount() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const [increment, setIncrement] = React.useState(0);

  return (
    <div>
      <div>
        <span>{count}</span>

        <br />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(increment))}
        >
          Increment by Amount
        </button>
        <br />

        <input
          label="Increment Amount"
          type="number"
          onChange={e => {
            setIncrement(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
