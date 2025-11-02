import {useState, useEffect, useRef} from 'react'

function Timer(){
    const [totalTime, setTotalTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalId = useRef(null);
    const startTime = useRef(0);

    async function getTime(){
        const res = await fetch('http://localhost:5000/api/time/6906c6505906525f2a55e555');
        const data = await res.json();
        console.log(data);
        setTotalTime(data.totalElapse);
        setIsRunning(data.isRunning);
        setElapsedTime(Date.now() - data.startTime)
    };

    useEffect(() => {
        getTime();
    }, [])

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

    async function start(){
        setIsRunning(true);
            const res = await fetch("http://localhost:5000/api/time/start/6906c6505906525f2a55e555", {
                                method: "PUT",
                                headers: { "Content-Type": "application/json"},
                                body: JSON.stringify({startTime: startTime.current,
                                                    isRunning: true
                                })
                            });
            const data = await res.json();
            console.log(data);
        startTime.current = Date.now() - elapsedTime;
    }

    async function stop(){
        setIsRunning(false);

        const res = await fetch("http://localhost:5000/api/time/stop/6906c6505906525f2a55e555", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json"},
                        body: JSON.stringify({isRunning: false})
                    });
        const data = await res.json();
        console.log(data);
    }

    async function reset(){
        setIsRunning(false);

        try {
            const res = await fetch("http://localhost:5000/api/time/reset/6906c6505906525f2a55e555", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ isRunning: false,  currentElapse: elapsedTime})
            })
            const data = await res.json();
            console.log("Updated time:", data);
        } catch (error) {
            
        }

        getTime();
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
        <>
            <div className="timer">
                <div>

                    <h1 className='time'>{(hour === '00') ?`${minute}:${second}:${millisecond}` :
                                                        `${hour}:${minute}:${second}`}</h1>
                </div>
                <div className='buttons'>
                    {isRunning ? <button onClick={stop} className='stop-button' id='stop'>Stop</button>:
                                <button onClick={start} className='start-button' id='start'>Start</button>
                                }
                    <button onClick={reset} className='reset-button' id='reset'>Reset</button>
                </div>
            </div>
            <div>
                {totalTime}
            </div>
        </>
    );
}


export default Timer;