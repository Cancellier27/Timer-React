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

                hourTimer: 0,
                minuteTimer: 0,
                secondTimer: 0
            },
            this.Timer
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
            isDisableStart: false
        })

        this.makeTimeCount(this.state.startPressed)
    }

    pause() {
        console.log('pause')
        clearInterval(this.Timer)
        this.setState({ isDisableStart: true })
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
            hourTimer: 0,
            minuteTimer: 0,
            secondTimer: 0
        })
    }

    makeTimeCount(bool) {
        if (!bool) {
            this.setState({
                hourTimer: this.state.hourInput,
                minuteTimer: this.state.minInput,
                secondTimer: this.state.secInput
            })
        }

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

                start={() => this.start()}
                pause={() => this.pause()}
                restart={() => this.restart()}
            />
        )
    }
}

export default App