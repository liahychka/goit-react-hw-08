import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'
import ContactList from '../ContactList/ContactList'

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
        <NavLink to='/'>
          Home
      </NavLink>
      {!isLoggedIn && (
        <div>
      <NavLink to='/register'>
        Register
      </NavLink>
      <NavLink to='/login'>
        Log in
      </NavLink>
      </div>
      )}

      {isLoggedIn && (
        <div>
      {/* <ContactList/> */}
      <button>Logout</button>
      <div>Welcome, {user.name}</div>   
        </div>


   )

}      
      


    </div>
  )
}

export default Header