import React from 'react'

const RecipeCard = ({ data }) => {
  const ingredients = data.ingredients
    .split(',')
    .map(item => <li key={item}>{item}</li>)

  const instructions = data.instructions
    .split('\n')
    .map(item => <li key={item}>{item}</li>)

  const requireImage = chemin => {
    try {
      return `/assets/images/${chemin}`
    } catch (err) {
      return '../../../Default.jpeg'
    }
  }

  return (
    <div className='card'>
      <div className='recette'>
        <h2>{data.name}</h2>
        <div className='image'>
          <img src={requireImage(data.image)} alt={data.nom} />
        </div>
        <ul className='liste-ingredients'>
          {ingredients}
        </ul>
        <ol className='liste-instructions'>
          {instructions}
        </ol>
      </div>
    </div>
  )
}

export default RecipeCard
