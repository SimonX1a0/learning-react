import React, {useState, useEffect, useRef} from 'react'

function Timer(){
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalId = useRef();
    const startTime = useRef();

    useEffect(() => {
        if(isRunning){
        intervalId.current = setInterval(()=>{
            setTimeElapsed(Date.now() - startTime.current);
        }, 10)
        }

        return () => {
            clearInterval(intervalId.current);
        }
    })

    function start(){
        setIsRunning(true);
        startTime.current = Date.now() - timeElapsed;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setTimeElapsed(0);
    }

    let hour = Math.floor(timeElapsed / (1000*60*60));
    let minute = Math.floor(timeElapsed / (1000*60) % 60);
    let second = Math.floor(timeElapsed / (1000) % 60);
    let millisecond = Math.floor(timeElapsed % 1000 / 10);

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");
    millisecond = String(millisecond).padStart(2, "0");


    return(
        <div className="timer">
            <div>
                <h1 className='time'>{`${minute}:${second}:${millisecond}`}</h1>
            </div>
            <div className='buttons'>
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>Stop</button>
                <button onClick={reset} className='reset-button'>Reset</button>
            </div>
        </div>
    );
}

export default Timer;