import React from 'react'
import Modal from 'react-bootstrap/Modal'

const RecipeCard = ({
  id: key,
  recipies,
  updateRecipe,
  deleteRecipe
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ingredients = recipies[key].ingredients
    .split(',')
    .map((item, index) => <li key={index}>{item}</li>)

  const instructions = recipies[key].instructions
    .split('\n')
    .map((item, index) => <li key={index}>{item}</li>)

  const requireImage = path => {
    try {
      return `/assets/images/${path}`
    } catch (err) {
      return '../../../Default.jpeg'
    }
  }

  const currentRecipe = recipies[key]

  const handleChange = (event, key) => {
    const { name, value } = event.target
    const recipe = recipies[key]
    recipe[name] = value
    updateRecipe(key, recipe)
  }

  const handleDeleteRecipe = key => {
    deleteRecipe(key)
  }

  const showModal = () => {
    setIsOpen(true)
  }

  const hideModal = () => {
    setIsOpen(false)
  }

  return (
    <div className='card'>
      <div className='recette'>
        <h2>{recipies[key].name} - {key}</h2>
        <button onClick={() => handleDeleteRecipe(key)}>Delete</button>
        <div className='image'>
          <img src={requireImage(recipies[key].image)} alt={recipies[key].name} />
        </div>
        <ul className='liste-ingredients'>
          {ingredients}
        </ul>
        <ol className='liste-instructions'>
          {instructions}
        </ol>
      </div>
      <button onClick={showModal}>Edit</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card'>
            <h1>DIOOO</h1>
            <form action='' className='admin-form'>
              <input value={currentRecipe.name} onChange={e => handleChange(e, key)} type='text' name='name' />
              <input value={currentRecipe.image} onChange={e => handleChange(e, key)} type='text' name='image' />
              <textarea value={currentRecipe.ingredients} onChange={e => handleChange(e, key)} id='' name='ingredients' rows='3' />
              <textarea value={currentRecipe.instructions} onChange={e => handleChange(e, key)} id='' name='instructions' rows='15' />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RecipeCard
