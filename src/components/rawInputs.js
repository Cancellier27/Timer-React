import React, { PropTypes } from 'react'

const RawInputs = ({ timeVariable, disabled, time}) => (
    <input type="text" value={time} disabled={disabled}  onChange={timeVariable} />
)


RawInputs.propTypes = {
    timeVariable: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired
}

export default RawInputs