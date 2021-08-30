import React from "react"

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: ["css", "javascript", "react", "other", "all"]
    }
  }
  render() {
    return (
      < > 
        {this.props.render(this.state.category)}
      </>
    )
  }
}

export default Category