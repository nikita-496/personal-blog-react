import React from "react"


const withTextUpdate = (WrappedComponent, selectCallback) => {
  
  return class InputArea extends React.Component {
    handleChange = (callback, e) => {
      callback(e.target.value)
    }
  
  render () {
  return <WrappedComponent {...this.props} handleChange={ (e) => this.handleChange(selectCallback(this.props) , e)} />
    }
  }
}

export default withTextUpdate