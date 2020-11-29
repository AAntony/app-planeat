import React, { Component, useState } from 'react'

import base, { firebaseApp } from '../Firebase/base'

const apiRecipe = ( WrappedComponent, uidUser ) => (

  class HOC extends Component {
    state = {
      uid: '',
      recipies: {}
    }

    componentDidMount () {
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          this.setState({ uid: user.uid })
          this.ref = base.syncState(`users/${this.state.uid}/recipies`, {
            context: this,
            state: 'recipies'
          })
        }
      })
    }
  
    componentWillUnmount () {
      base.removeBinding(this.ref)
    }

    createRecette = recipe => {
      const recipies = {...this.state.recipies}
      recipies[`recipe-${Date.now()}`] = recipe
      this.setState({ recipies })
    }

    render () {
      return (
        <WrappedComponent
          recipiesDB={this.state.recipies}
          createRecette={this.createRecette}
          {...this.props}
        />
      )
    }
  }
)

export default apiRecipe
