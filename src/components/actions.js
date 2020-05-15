import React from 'react'

const Actions = ({ start, pause, restart, isDisableStart, continueClock, isContinueON}) => (
    <div className="action">
        {isDisableStart && <button onClick={start} >Start</button>}
        {isContinueON && <button onClick={continueClock}>Continue</button>}
        <button onClick={pause} >Pause</button>
        <button onClick={restart} >Restart</button>
    </div>
)

export default Actions