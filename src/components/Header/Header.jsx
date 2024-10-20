import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'
import ContactList from '../ContactList/ContactList'
import { logout } from '../../redux/auth/operations'

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (

    <div>
      {isLoggedIn && <div>Welcome, {user.name}</div>}
        <NavLink to='/'>
          Home
      </NavLink>

      {!isLoggedIn && (
        <>
      <NavLink to='/register'>
        Register
      </NavLink>
      <NavLink to='/login'>
        Log in
        </NavLink>
        {/* <ContactList/> */}
      </>
      )}

      {isLoggedIn && (
        <div>
      <button onClick={() => dispatch(logout())} >Logout</button>
        </div>
   )
}      
    </div>
  )
}

export default Header