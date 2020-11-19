import React, { Component } from 'react'

import { withAuthorization } from '../Session'

class Stock extends Component {
  render () {
    return (
      <div>
        <h1>Stock</h1>
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Stock)
