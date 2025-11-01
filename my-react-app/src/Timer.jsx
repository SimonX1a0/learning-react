import React, {useState, useEffect, useRef} from 'react'

function Timer(){
    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    return(
        <div className="timer">
            <div>
                <h1 className='time'>{`00:00:00`}</h1>
            </div>
            <div className='buttons'>
                <button className='start-button'>Start</button>
                <button className='stop-button'>Stop</button>
                <button className='reset-button'>Reset</button>
            </div>
        </div>
    );
}

export default Timer;