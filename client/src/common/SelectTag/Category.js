import React from "react"

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoty: ["css", "javascript", "react", "other"]
    }
  }
  render() {
    return (
      < > 
        {this.props.children(this.state.categoty)}
      </>
    )
  }
}

export default Category