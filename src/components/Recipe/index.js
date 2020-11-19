import React, { Component } from 'react'

import RecipeCard from './recipe'

import { withAuthorization } from '../Session'

import recettes from './recettes'

class Recipe extends Component {
  render () {
    const recipies = Object.keys(recettes)
      .map(key => <RecipeCard
        data={recettes[key]}
        key={key} />)

    return (
      <div>
        <h1>Vos recettes</h1>
        {recipies}
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Recipe)
