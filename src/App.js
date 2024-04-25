import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = status => {
    console.log(status)
    this.setState({showContent: status})
  }

  onToggleShowLeftNavbar = status => {
    console.log(status)
    this.setState({showLeftNavbar: status})
  }

  onToggleShowRightNavbar = status => {
    console.log(status)
    this.setState({showRightNavbar: status})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          onToggleShowContent: this.onToggleShowContent,
          showLeftNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          showRightNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
