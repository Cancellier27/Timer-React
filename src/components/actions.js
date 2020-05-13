import React from 'react'

const Actions = ({ start, pause, restart, isDisableStart }) => (
    <div className="action">
        {isDisableStart && <button onClick={start} >Start</button>}
        <button onClick={pause} >Pause</button>
        <button onClick={restart} >Restart</button>
    </div>
)

export default Actions