import React, { Component } from 'react'

class AddStockItem extends Component {
  state = {
    name: '',
    image: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = event => {
    event.preventDefault()
    const stockItem = { ...this.state }
    this.props.createStockItem(stockItem)
    this.resetForm()
  }

  resetForm = () => {
    this.setState({ name: '', image: '' })
  }

  render () {
    return (
      <div className='card'>
        <h2>{this.props.uid}</h2>
        <form
          className='admin-form add-stock-item' 
          onSubmit={this.onSubmit}>
          <input value={this.state.name} type='text' name='name' onChange={this.handleChange} placeholder={'Item\'s name'} />
          <input value={this.state.image} type='text' name='image' onChange={this.handleChange} placeholder={'Item\'s image'} />
          <button type='submit'>Add item</button>
        </form>
      </div>
    )
  }
}

export default AddStockItem
