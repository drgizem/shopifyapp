import React ,{useContext} from 'react'
import UserDataContext from './UserDataContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const { userData, query, setQuery } = useContext(UserDataContext)

  return (
    <>
      <nav className='navbar'>
      <div className='navbar__title'>
        <img className="navbar__img" alt="shopify" src='../../images/shopify.png' />
          <span>My Shopify</span>
        </div>
        <div>
        <Link to='/products' className='navbar__link'>
            Products
          </Link>
          
        </div>
        <div>
        <Link to='/order' className='navbar__link'>
            Order
          </Link>
          
        </div>
        <div>
          <input
            className='navbar__search'
            placeholder='Search...'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className='username'>
            Hello{' '}
            {userData.username !== "" && (
              userData.username
            )}
          </div>
      </nav>
    </>
  )
}