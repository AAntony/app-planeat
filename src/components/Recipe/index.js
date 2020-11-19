import React, { Component } from 'react'

import { withAuthorization } from '../Session'

class Recipe extends Component {
  render () {
    return (
      <div>
        <h1>Recipe</h1>
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Recipe)
