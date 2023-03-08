import React from 'react'
import {
  DeleteMajor
} from '@shopify/polaris-icons'
import {Icon} from '@shopify/polaris'
import {Button} from '@shopify/polaris';

export default function CartItem({
  deleteItem,
  onItemDecrease,
  id,
  onItemIncrease,
  image,
  title,
  description,
  price,
  quantity,
  discount,
  calculatePrice
}) {

  return (
    <div className='card'>
      <div onClick={() => deleteItem(id)} className='deleteItem'>
      <div className='card__delete'><Icon
  source={DeleteMajor}
  color="base"
/></div>
      </div>
      <img alt='cardimage' src={image} />
      <h1 className='card__title'>{title}</h1>
      <p className='card__info'>{description}</p>
      <p className='card__price'>{price}</p>
      <p className='card__price'>Discount:{discount}%</p>
      <p className='card__price'>Final Unit price:{parseFloat(calculatePrice(price))*(100-discount)/100}</p>
      <div className='number'>
      <Button onClick={() => onItemDecrease(id)} color='warning'>
          -
        </Button>
        <p>{quantity}</p>
        <Button
          onClick={() => onItemIncrease(id)}
          color='warning'
        >
          +
        </Button>
      </div>
    </div>
  )
}
