import React, { Component } from 'react'

import base, { firebaseApp } from '../Firebase/base'

const apiStock = ( WrappedComponent, uidUser ) => (

  class HOC extends Component {
    state = {
      uid: '',
      stockItems: {}
    }

    componentDidMount () {
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          this.setState({ uid: user.uid })
          this.ref = base.syncState(`users/${this.state.uid}/stockItems`, {
            context: this,
            state: 'stockItems'
          })
        }
      })
    }
  
    componentWillUnmount () {
      base.removeBinding(this.ref)
    }

    createStockItem = stockItem => {
      const stockItems = {...this.state.stockItems}
      stockItems[`stockItem-${Date.now()}`] = stockItem
      this.setState({ stockItems })
    }

    updateStockItem = (key, newStockItem) => {
      const stockItems = {...this.state.stockItems}
      stockItems[key] = newStockItem
      this.setState({ stockItems })
    }

    deleteStockItem = key => {
      const stockItems = {...this.state.stockItems}
      stockItems[key] = null
      this.setState({ stockItems })
    }

    render () {
      return (
        <WrappedComponent
          stockItemsDB={this.state.stockItems}
          createStockItem={this.createStockItem}
          updateStockItem={this.updateStockItem}
          deleteStockItem={this.deleteStockItem}
          {...this.props}
        />
      )
    }
  }
)

export default apiStock
