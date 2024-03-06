// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  renderInSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderInMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderInMinutes()}:${this.renderInSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>

            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                onClick={this.onStartTimer}
                disabled={isTimeRunning}
                className="start-button button"
              >
                Start
              </button>

              <button
                type="button"
                onClick={this.onStopTimer}
                className="start-button button"
              >
                Stop
              </button>

              <button
                type="button"
                onClick={this.onResetTimer}
                className="start-button button"
              >
                {' '}
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
