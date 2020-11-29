import React from 'react'
import { AuthUserContext, withAuthorization } from '../Session'

import apiRecipe from './apiRecipe'
import AddRecipe from './addRecipe'
import RecipeCard from './recipe'

const Recipe = ({ createRecette, recipiesDB }) => {

  const recipies = Object.keys(recipiesDB)
    .map(key => <RecipeCard
      data={recipiesDB[key]}
      key={key} />)

  const uidUser = (
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? authUser.uid : 'Nope'
      )}
    </AuthUserContext.Consumer>
  )

  return (
    <>
      <h1>Vos recettes</h1>
      {recipies}
      <AddRecipe
        uid={uidUser}
        addRecipe={createRecette}
      />
    </>
  )
}

const condition = authUser => !!authUser

const WrappedComponent = withAuthorization(condition)(apiRecipe(Recipe))

export default WrappedComponent
