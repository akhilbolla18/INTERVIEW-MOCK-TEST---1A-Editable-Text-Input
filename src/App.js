import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    saved: true,
    inputText: '',
  }

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  changePrev = () => {
    this.setState(prevState => ({
      saved: !prevState.saved,
    }))
  }

  edit = () => {
    this.setState({saved: true})
  }

  renderInputField = () => {
    const {inputText} = this.state
    return (
      <div className="input-con">
        <input
          type="text"
          className="here"
          id="text"
          value={inputText}
          onChange={this.onChangeText}
        />
        <button className="button" type="button" onClick={this.changePrev}>
          save
        </button>
      </div>
    )
  }

  renderSavedField = () => {
    const {inputText} = this.state
    return (
      <div className="input-con">
        <p className="para">{inputText}</p>
        <button className="button" type="button" onClick={this.edit}>
          edit
        </button>
      </div>
    )
  }

  render() {
    const {saved} = this.state
    console.log(saved)
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="h1">Editable Text Input</h1>
          {saved ? this.renderInputField() : this.renderSavedField()}
        </div>
      </div>
    )
  }
}

export default App
