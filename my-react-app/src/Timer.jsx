import React, {useState, useEffect, useRef} from 'react'

function Timer(){


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