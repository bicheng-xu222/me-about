// src/index.js
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute } from "react-router"
import store, { history } from "./store"
import "normalize.css"

import App from "./App"
import "./index.css"
import "./pace.css"

import AlbumContainer from "./containers/AlbumContainer"
import PhotographyContainer from "./containers/PhotographyContainer"
import FullSizeContainer from "./containers/FullSizeContainer"
import About from "./containers/AboutContainer"
import ResumeSection from "./components/ResumeSection"

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="/projects" component={AlbumContainer} />
        <Route path="/photo" component={AlbumContainer} />
        <Route path="/photo/:albumKey" component={PhotographyContainer} />
        <Route path="/photo/:albumKey/:photoKey" component={FullSizeContainer} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={ResumeSection} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
)
