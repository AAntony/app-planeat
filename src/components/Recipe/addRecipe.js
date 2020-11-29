import React, { Component } from 'react'

class AddRecipe extends Component {
  state = {
    name: '',
    image: '',
    ingredients: '',
    instructions: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = event => {
    event.preventDefault()
    const recette = { ...this.state }
    this.props.addRecipe(recette)
    this.resetForm()
  }

  resetForm = () => {
    this.setState({ name: '', image: '', ingredients: '', instructions:'' })
  }

  render () {
    return (
      <div className='card'>
        <h2>{this.props.uid}</h2>
        <form
          className='admin-form ajouter-recette' 
          onSubmit={this.onSubmit}>
          <input value={this.state.name} type='text' name='name' onChange={this.handleChange} placeholder='Nom de la recette' />
          <input value={this.state.image} type='text' name='image' onChange={this.handleChange} placeholder={'Nom de l\'image'} />
          <textarea value={this.state.ingredients} rows='3' name='ingredients' onChange={this.handleChange} placeholder='Nom des ingrédients' />
          <textarea value={this.state.instructions} rows='15' name='instructions' onChange={this.handleChange} placeholder='Nom des instructions' />
          <button type='submit'>Ajouter une recette</button>
        </form>
      </div>
    )
  }
}

export default AddRecipe
