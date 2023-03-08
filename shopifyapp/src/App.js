import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Products from "./components/Products"
import Order from "./components/Order"
import Login from "./components/Login"
import React,{useState} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserDataContext from './components/UserDataContext'

function App() {
  const [userData, setUserData] = useState({
    username: '',
    items: [],
  })
  const [query, setQuery] = useState('')
  function clearCart() {
    setUserData({ ...userData, items: [] })
  }
  function deleteItem(id) {
    setUserData({
      ...userData,
      items: userData.items.filter(item => {
        return item.id !== id
      }),
    })
  }
  function onOrder(product){
    setUserData(oldUserData => {
      let newUserData = { ...oldUserData }
      let oldItemIndex = newUserData.items.findIndex(
        item => product.id === item.id
      )

      if (oldItemIndex > -1) {
        let oldItem = newUserData.items[oldItemIndex]
        let newItem = { ...oldItem, count: oldItem.count + 1 }
        let newItems = [...newUserData.items]
        newItems[oldItemIndex] = newItem
        newUserData.items = newItems
        return newUserData
      } else {
        let newItem = { ...product, count: 1 }
        let newItems = [...newUserData.items, newItem]
        newItems[newUserData.items.length] = newItem
        newUserData.items = newItems
        return newUserData
      }
    })
  }
  function onItemDecrease(id) {
    setUserData(oldUserData => {
      const newUserData = { ...oldUserData }
      const oldItemIndex = newUserData.items.findIndex(item => id === item.id)
      const oldItem = newUserData.items[oldItemIndex]
      const newItem = { ...oldItem, count: oldItem.count - 1 }
      const newItems = [...newUserData.items]
      newItems[oldItemIndex] = newItem
      newUserData.items = newItems

      if (oldItem.count > 1) {
        return newUserData
      } else {
        return {
          ...oldUserData,
          items: oldUserData.items.filter(item => {
            return item.id !== id
          }),
        }
      }
    })
  }

  function onItemIncrease(id) {
    setUserData(oldUserData => {
      const newUserData = { ...oldUserData }
      const oldItemIndex = newUserData.items.findIndex(item => id === item.id)
      const oldItem = newUserData.items[oldItemIndex]
      const newItem = { ...oldItem, count: oldItem.count + 1 }
      const newItems = [...newUserData.items]
      newItems[oldItemIndex] = newItem
      newUserData.items = newItems
      return newUserData
    })
  }
  
  return (
    <UserDataContext.Provider
    value={{ userData, setUserData, query, setQuery }}
  >
    
    <Router>
    <Navbar/>
    <div className="App">
    <Route exact path='/'>
      <Register/>
    </Route>
    <Route exact path="/products">
      <Products handleClick={onOrder}/>
    </Route>
    <Route path="/order">
      <Order 
      items={userData.items}
      clearCart={clearCart}
      deleteItem={deleteItem}
      onItemDecrease={onItemDecrease}
      onItemIncrease={onItemIncrease}/>
    </Route>
    <Route path="/login"><Login/></Route>
    </div>
    </Router>
    </UserDataContext.Provider>
  );
}

export default App;
