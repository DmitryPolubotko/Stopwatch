import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({s:0, m:0, h:0});
  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 1000));
  };

  var updateS = time.s,
      updateM = time.m,
      updateH = time.h

  const run = () => {
    if(updateM === 60){
      updateH++;
      updateM = 0;
    }
    if(updateS === 60){
      updateM++;
      updateS = 0;
    }
    updateS++
    return setTime({s:updateS, m:updateM, h:updateH});
  };

  const stop = () => {
    clearInterval(interv);
  };

  const reset = () => {
    clearInterval(interv);
    setTime({s:0, m:0, h:0});
  };

  return (
    <div className="main-section">
        <div className="clock">
          <div className="stopwath">
            <DisplayComponent time={time}/>
            <BtnComponent reset={reset} stop={stop} start={start}/>
          </div>
        </div>
    </div>
  );
}

export default App;