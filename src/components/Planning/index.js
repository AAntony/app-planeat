import React, { Component } from 'react'

import { withAuthorization } from '../Session'

class Planning extends Component {
  render () {
    return (
      <div>
        <h1>Planning</h1>
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Planning)
