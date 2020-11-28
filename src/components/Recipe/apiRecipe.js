import React, { Component } from 'react'

import base from '../Firebase/base'

const apiRecipe = WrappedComponent => (
  class HOC extends Component {
    state = {
      pseudo: '2axxpwsLB1Qw1NZ7XORtabZgKBg2',
      recipies: {}
    }

    componentDidMount () {
      this.ref = base.syncState(`users/${this.state.pseudo}/recipies`, {
        context: this,
        state: 'recipies'
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
