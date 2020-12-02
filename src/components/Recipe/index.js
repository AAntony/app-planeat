import React from 'react'
import { AuthUserContext, withAuthorization } from '../Session'

import apiRecipe from './apiRecipe'
import AddRecipe from './addRecipe'
import RecipeCard from './recipeCard'

const Recipe = ({ createRecipe, updateRecipe, deleteRecipe, recipiesDB }) => {

  const recipies = Object.keys(recipiesDB)
    .map(key =>
      <RecipeCard
        recipies={recipiesDB}
        deleteRecipe={deleteRecipe}
        updateRecipe={updateRecipe}
        key={key}
        id={key}
      />
    )

  const uidUser = (
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? authUser.uid : 'Nope'
      )}
    </AuthUserContext.Consumer>
  )

  return (
    <>
      <h1>Your recipe</h1>
      {recipies}
      <AddRecipe
        uid={uidUser}
        createRecipe={createRecipe}
      />
    </>
  )
}

const condition = authUser => !!authUser

const WrappedComponent = withAuthorization(condition)(apiRecipe(Recipe))

export default WrappedComponent
