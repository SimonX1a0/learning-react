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
                <h1>{`00:00:00`}</h1>
            </div>
            <div className='buttons'>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
}

export default Timer;