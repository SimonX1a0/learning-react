import {useState, useEffect, useRef} from 'react'

function Timer(){
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalId = useRef(null);
    const startTime = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalId.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTime.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalId.current);
        }

    })

    function start(){
        setIsRunning(true);
        startTime.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }

    let hour = Math.floor(elapsedTime / (1000*60*60));
    let minute = Math.floor(elapsedTime / (1000*60) % 60);
    let second = Math.floor(elapsedTime / (1000) % 60);
    let millisecond = Math.floor(elapsedTime % (1000) / 10);

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");
    millisecond = String(millisecond).padStart(2, "0");


    return(
        <div className="timer">
            <div>

                <h1 className='time'>{(hour === '00') ?`${minute}:${second}:${millisecond}` :
                                                       `${hour}:${minute}:${second}`}</h1>
            </div>
            <div className='buttons'>
                {isRunning ? <button onClick={stop} className='stop-button'>Stop</button>:
                             <button onClick={start} className='start-button'>Start</button>
                             }
                <button onClick={reset} className='reset-button'>Reset</button>
            </div>
        </div>
    );
}

export default Timer;