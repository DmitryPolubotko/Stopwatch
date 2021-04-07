import React from 'react';

function BtnComponent(props) {
  return (
    <div>
        <button className="stopwatch-btm stopwatch-start"
                onClick={props.start}>Start</button>
        <button className="stopwatch-btm stopwatch-stop"
                onClick={props.stop}>Stop</button>
        <button className="stopwatch-btm stopwatch-reset"
                onClick={props.reset}>Reset</button>
    </div>
  );
}

export default BtnComponent;