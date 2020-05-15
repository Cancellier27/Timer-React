import React, { Component, PropTypes } from 'react'

import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super(),
            this.state = {
                hourInput: 0,
                minInput: 0,
                secInput: 0,

                startPressed: false,
                isDisableInputs: false,
                isDisableStart: true,

                isContinueON: false,

                hourTimer: 0,
                minuteTimer: 0,
                secondTimer: 0
            },
            this.Timer = 0
    }

    timeFunc(type) {
        return ((e) => (
            this.setState({
                [type]: parseFloat(e.target.value)
            })
        ))
    }

    start() {
        console.log('start')
        this.setState({
            startPressed: true,
            isDisableInputs: true,
            isDisableStart: false,
            hourTimer: this.state.hourInput,
            minuteTimer: this.state.minInput,
            secondTimer: this.state.secInput
        })

        this.runTimer()
    }

    pause() {
        console.log('pause')
        clearInterval(this.Timer)
        this.setState({ isContinueON: true })
    }

    continueClock() {
        console.log('continue')
        this.runTimer()
        this.setState({ isContinueON: false })
    }

    restart() {
        console.log('restart')
        clearInterval(this.Timer)
        this.setState({
            hourInput: 0,
            minInput: 0,
            secInput: 0,
            startPressed: false,
            isDisableInputs: false,
            isDisableStart: true,
            isContinueON: false,
            hourTimer: 0,
            minuteTimer: 0,
            secondTimer: 0
        })
    }

    timeIntervalCalc() {
        let hours = this.state.hourTimer
        let minutes = this.state.minuteTimer
        let seconds = this.state.secondTimer

        // calculando quando houve horas
        if (hours > 0) {
            this.setState({ secondTimer: seconds - 1 })
            if (seconds <= 0 && minutes === 0) {
                this.setState({
                    hourTimer: hours - 1,
                    minuteTimer: 59,
                    secondTimer: 59
                })
            } else if (seconds <= 0 && minutes > 0) {
                this.setState({
                    minuteTimer: minutes - 1,
                    secondTimer: 59
                })
            }
        }
        // calculando quando houver minutos
        else if (minutes > 0 && hours === 0) {
            this.setState({ secondTimer: seconds - 1 })
            if (seconds <= 0) {
                this.setState({
                    minuteTimer: minutes - 1,
                    secondTimer: 59
                })
            }
        }
        // calculando apenas quand houver apenas segundos
        else if (seconds > 0 && minutes === 0) {
            this.setState({ secondTimer: seconds - 1 })
        }

        return
    }

    runTimer() {
        this.Timer = setInterval(() => this.timeIntervalCalc(), 1000)
    }


    render() {
        return (
            <AppContent
                hourFunc={this.timeFunc('hourInput')}
                minFunc={this.timeFunc('minInput')}
                secFunc={this.timeFunc('secInput')}

                hourTimer={this.state.hourTimer}
                minuteTimer={this.state.minuteTimer}
                secondTimer={this.state.secondTimer}

                hourInput={this.state.hourInput}
                minInput={this.state.minInput}
                secInput={this.state.secInput}

                isDisableInputs={this.state.isDisableInputs}
                isDisableStart={this.state.isDisableStart}
                isContinueON={this.state.isContinueON}

                start={() => this.start()}
                pause={() => this.pause()}
                restart={() => this.restart()}
                continueClock={() => this.continueClock()}
            />
        )
    }
}

export default App