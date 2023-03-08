import Product from "./Product"
import products from "../products"
import UserDataContext from './UserDataContext'
import React,{useContext} from "react"

export default function Products(props){
  const { handleClick } = props
  const { query } = useContext(UserDataContext)
        return (
            <div className='container'>
              {products
              .filter(
                product =>
                  product.title.toLowerCase().includes(query) ||
                  product.description.toLowerCase().includes(query) ||
                  product.category.toLowerCase().includes(query)
              )
                .map(product => {
                  const { title, price, image, description, id,category,discount } = product
                  return (
                    <Product
                      title={title}
                      price={price}
                      image={image}
                      description={description}
                      category={category}
                      key={id}
                      id={id}
                      product={product}
                      discount={discount}
                      handleClick={handleClick}
                    />
                  )
                })}
            </div>
    )
}