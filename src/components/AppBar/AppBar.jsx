import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'

import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'

const AppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggedIn && <Navigation />}
      {isLoggedIn && <UserMenu />}
    </div>
  )
}

export default AppBar