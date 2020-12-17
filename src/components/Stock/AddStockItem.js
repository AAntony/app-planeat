import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

class AddStockItem extends Component {
  state = {
    name: '',
    image: '',
    quantity: '',
    price: '',
    dueDate: '',
    imperative: false,
    currentDate: new Date(),
    comment: ''
  }

  handleChange = event => {
    let name, value
    if(event.target === undefined) {
      name = 'dueDate'
      value = event.getTime()
    } else {
      name = event.target.name
      value = event.target.value
    }
    this.setState({ [name]: value })
  }

  onSubmit = event => {
    event.preventDefault()
    const stockItem = { ...this.state }
    this.props.createStockItem(stockItem)
    this.resetForm()
  }

  resetForm = () => {
    this.setState({ name: '', image: '', quantity: '', price: '', dueDate: '', imperative: '', comment: '' })
  }

  render () {
    return (
      <div className='card'>
        <h2>{this.props.uid}</h2>
        <form
          className='admin-form' 
          onSubmit={this.onSubmit}>
          <input value={this.state.name} type='text' name='name' onChange={this.handleChange} placeholder={'Item\'s name'} />
          <input value={this.state.image} type='text' name='image' onChange={this.handleChange} placeholder={'Item\'s image'} />
          <input value={this.state.quantity} type='text' name='quantity' onChange={this.handleChange} placeholder={'Item\'s quantity'} />
          <input value={this.state.price} type='text' name='price' onChange={this.handleChange} placeholder={'Item\'s price'} />
          <DatePicker
            dateFormat='dd/MM/yyyy'
            selected={this.state.dueDate}
            name ='dueDate'
            onChange={this.handleChange} />
          <input value={this.state.imperative} type='text' name='imperative' onChange={this.handleChange} placeholder={'Item\'s imperative'} />
          <textarea value={this.state.comment} rows='3' name='comment' onChange={this.handleChange} placeholder={'Item\'s comment'} />
          <button type='submit'>Add recipe</button>
        </form>
      </div>
    )
  }
}

export default AddStockItem
