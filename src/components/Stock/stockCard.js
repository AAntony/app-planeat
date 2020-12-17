import React from 'react'
import Modal from 'react-bootstrap/Modal'
import DatePicker from 'react-datepicker'


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
    let name, value
    if (event.target === undefined) {
      name = 'dueDate'
      value = event.getTime()
    } else {
      name = event.target.name
      value = event.target.value
    }
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

  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric'
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
        <div>{stockItems[key].quantity}</div>
        <div>{stockItems[key].price}</div>
        <div>{new Date(stockItems[key].dueDate).toLocaleDateString(undefined, options)}</div>
        <div>{stockItems[key].currentDate}</div>
        <div>{stockItems[key].imperative}</div>
        <div>{stockItems[key].comment}</div>
      </div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card'>
            <h1>Edit</h1>
            <form action='' className='admin-form'>
              <input value={currentStockItem.name} onChange={e => handleChange(e, key)} type='text' name='name' />
              <input value={currentStockItem.image} onChange={e => handleChange(e, key)} type='text' name='image' />
              <input value={currentStockItem.quantity} onChange={e => handleChange(e, key)} type='text' name='quantity' />
              <input value={currentStockItem.price} onChange={e => handleChange(e, key)} type='text' name='price' />
              <DatePicker
                dateFormat='dd/MM/yyyy'
                selected={new Date(currentStockItem.dueDate)}
                name='dueDate'
                onChange={date => handleChange(date, key)}
              />
              <input value={currentStockItem.imperative} onChange={e => handleChange(e, key)} type='text' name='imperative' />
              <input value={currentStockItem.comment} onChange={e => handleChange(e, key)} type='text' name='comment' />
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
