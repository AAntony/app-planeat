import React from 'react'
import { withAuthorization } from '../Session'

import apiRecipe from './apiRecipe'
import AddRecipe from './addRecipe'
import RecipeCard from './recipe'

const Recipe = ({ createRecette, recipiesDB }) => {

  const recipies = Object.keys(recipiesDB)
    .map(key => <RecipeCard
      data={recipiesDB[key]}
      key={key} />)

  return (
    <>
      <h1>Vos recettes</h1>
      {recipies}
      <AddRecipe
        addRecipe={createRecette}
      />
    </>
  )
}

const condition = authUser => !!authUser

const WrappedComponent = withAuthorization(condition)(apiRecipe(Recipe))

export default WrappedComponent
