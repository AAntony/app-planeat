import React from 'react'

import apiStock from './apiStock'
import AddStockItem from './AddStockItem'
import StockCard from './stockCard'

import { AuthUserContext, withAuthorization } from '../Session'

const Stock = ({ createStockItem, updateStockItem, deleteStockItem, stockItemsDB }) => {
  const stockItems = Object.keys(stockItemsDB)
    .map(key =>
      <StockCard
        stockItems={stockItemsDB}
        deleteStockItem={deleteStockItem}
        updateStockItem={updateStockItem}
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
      <h1>Your stock</h1>
      {stockItems}
      <AddStockItem
        uid={uidUser}
        createStockItem={createStockItem}
      />
    </>
  )
}

const condition = authUser => !!authUser

const WrappedComponent = withAuthorization(condition)(apiStock(Stock))

export default WrappedComponent
