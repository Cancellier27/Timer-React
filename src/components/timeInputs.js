import React from 'react'
import RawInputs from './rawInputs'

const TimeInputs = ({ 
    hourFunc, minFunc, secFunc, isDisableInputs,
    hourInput, minInput, secInput }) => (
    <div className="timeInputs">
        <div className="hours">
            <label>Hours</label>
            <RawInputs
            time={hourInput}
            disabled={isDisableInputs} 
            timeVariable={hourFunc} />

            <label>Minutes</label>
            <RawInputs 
            time={minInput}
            disabled={isDisableInputs} 
            timeVariable={minFunc} />

            <label>Seconds</label>
            <RawInputs 
            time={secInput}
            disabled={isDisableInputs} 
            timeVariable={secFunc} />
        </div>
    </div>
) 

export default TimeInputs