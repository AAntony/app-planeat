import React, { Component } from 'react'

import RecipeCard from './recipe'

import { withAuthorization } from '../Session'

import recettes from './recettes'

class Recipe extends Component {

  state = {
    nom: '',
    image: '',
    ingredients: '',
    instructions: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const recette = { ...this.state }
    this.props.ajouterRecette(recette)
    this.resetForm(recette)
  }

  resetForm = () => {
    this.setState({ nom: '', image: '', ingredients: '', instructions:'' })
  }

  render () {
    const recipies = Object.keys(recettes)
      .map(key => <RecipeCard
        data={recettes[key]}
        key={key} />)

    return (
      <div>
        <h1>Vos recettes</h1>
        {recipies}

        <div className='card'>
          <form
            className='admin-form ajouter-recette' 
            onSubmit={this.handleSubmit}>
            <input value={this.state.nom} type='text' name='nom' onChange={this.handleChange} placeholder='Nom de la recette' />
            <input value={this.state.image} type='text' name='image' onChange={this.handleChange} placeholder={'Nom de l\'image'} />
            <textarea value={this.state.ingredients} rows='3' name='ingredients' onChange={this.handleChange} placeholder='Nom des ingrédients' />
            <textarea value={this.state.instructions} rows='15' name='instructions' onChange={this.handleChange} placeholder='Nom des instructions' />
            <button type='submit'>Ajouter une recette</button>
          </form>
        </div>
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Recipe)
