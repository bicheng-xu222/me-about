import React, { Component } from "react"
import Navigation from "./components/Navigation"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation url={this.props.location.pathname} />
        {this.props.children}
      </div>
    )
  }
}

export default App
