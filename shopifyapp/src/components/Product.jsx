import React from 'react'
import {Button} from '@shopify/polaris'

export default function Product(props) {
  const { image, description, price, title, product,category, handleClick,discount } = props

  return (
    <div className='card'>
      <img alt='cardimage' src={image} />
      <h1 className='card__title'>{title}</h1>
      <p className='card__info'>{description}</p>
      <p className='card__info'>{category}</p>
      <p className='card__info'>Discount: {discount}%</p>
      <p className='card__price'>List Price: {price}</p>
      <div className='margin-b-md'>
        <Button
          variant='contained'
          color='warning'
          onClick={() => {
            handleClick(product)
          }}
        >
          Order
        </Button>
      </div>
    </div>
  )
}
