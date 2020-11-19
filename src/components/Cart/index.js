import React, { Component } from 'react'
import { withAuthorization } from '../Session'

class Cart extends Component {
  render () {
    return (
      <div>
        <h1>Cart</h1>
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Cart)
