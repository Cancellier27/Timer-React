import React from 'react'

const Clock = ({hourTimer, minuteTimer, secondTimer}) => (
    <div className="clock">
        <div>
            {(hourTimer >= 10 ? hourTimer : '0' + hourTimer)}
            :
            {(minuteTimer >= 10 ? minuteTimer : '0' + minuteTimer)}
            :
            {(secondTimer >= 10 ? secondTimer : '0' + secondTimer)}
        </div>
    </div>
)

export default Clock
