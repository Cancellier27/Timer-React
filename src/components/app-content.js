import React from 'react'

import Header from './header'
import TimeInputs from './timeInputs'
import Clock from './clock'
import Actions from './actions'
import Footer from './footer'


const AppContent = ({
    hourInput, minInput, secInput,
    isDisableInputs, hourFunc, minFunc,
    hourTimer, minuteTimer, secondTimer,
    secFunc, start, pause, restart, 
    isDisableStart, continueClock, isContinueON}) => (
        <div className="app">
            <Header />
            <TimeInputs
                isDisableInputs={isDisableInputs}
                hourFunc={hourFunc}
                minFunc={minFunc}
                secFunc={secFunc}
                hourInput={hourInput}
                minInput={minInput}
                secInput={secInput}
            />

            <Clock
                hourTimer={hourTimer}
                minuteTimer={minuteTimer}
                secondTimer={secondTimer}
            />

            <Actions
                isDisableStart={isDisableStart}
                start={start}
                pause={pause}
                restart={restart}
                continueClock={continueClock}
                isContinueON={isContinueON}
            />
            <Footer />
        </div>
    )

export default AppContent