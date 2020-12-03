import React from 'react'
import Modal from 'react-bootstrap/Modal'

const StockCard = ({
  id: key,
  stockItems,
  updateStockItem,
  deleteStockItem
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const requireImage = path => {
    try {
      return `/assets/images/${path}`
    } catch (err) {
      return '../../../Default.jpeg'
    }
  }

  const currentStockItem = stockItems[key]

  const handleChange = (event, key) => {
    const { name, value } = event.target
    const stockItem = stockItems[key]
    stockItem[name] = value
    updateStockItem(key, stockItem)
  }

  const handleDeleteStockItem = key => {
    deleteStockItem(key)
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
        <h2>{stockItems[key].name} - {key}</h2>
        <button onClick={showModal}>Edit</button>
        <button onClick={() => handleDeleteStockItem(key)}>Delete</button>
        <div className='image'>
          <img src={requireImage(stockItems[key].image)} alt={stockItems[key].name} />
        </div>
      </div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card'>
            <h1>DIOOO</h1>
            <form action='' className='admin-form'>
              <input value={currentStockItem.name} onChange={e => handleChange(e, key)} type='text' name='name' />
              <input value={currentStockItem.image} onChange={e => handleChange(e, key)} type='text' name='image' />
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

export default StockCard
