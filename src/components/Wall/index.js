import React, { Component } from 'react'
import { withAuthorization } from '../Session'

class Wall extends Component {
  render () {
    return (
      <div>
        <h1>Wall</h1>
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Wall)
