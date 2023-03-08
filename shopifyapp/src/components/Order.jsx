import React from 'react'
import CartItem from './CartItem'
import {Button} from '@shopify/polaris'

const calculatePrice = x => {
  return x.split('.').join('').replace(',', '.')
}

export default function Order(props) {
  const { deleteItem,clearCart, items,onItemDecrease,onItemIncrease } = props

  const totalPrice = items.reduce(
    (preItem, currentItem) =>
      preItem +
      parseFloat((calculatePrice(currentItem.price))) * currentItem.count *(100-currentItem.discount)/100,
    0
  )
  return (
    <>
      <h1 className='cart__title'>
        Order List
      </h1>
      {items.length === 0 && <div className='cart__note'>Cart is empty</div>}
      <div className='cart__page'>
        {items.map((item, index) => {
          const { title, price, description, id, count, image,discount } = item
          return (
            <CartItem
              title={title}
              price={price}
              image={image}
              discount={discount}
              description={description}
              key={index}
              id={id}
              deleteItem={deleteItem}
              quantity={count}
              onItemDecrease={onItemDecrease}
              onItemIncrease={onItemIncrease}
              calculatePrice={calculatePrice}
            />
          )
        })}
      </div>
      <div className='cart__total margin-b-lg'>
        Total:{totalPrice.toFixed(2)} TL
      </div>
      <div className='cart__btn d-flex'>
        <Button onClick={clearCart}>
          Clear My Cart
        </Button>
        <Button>
          Checkout
        </Button>
      </div>
    </>
  )
}