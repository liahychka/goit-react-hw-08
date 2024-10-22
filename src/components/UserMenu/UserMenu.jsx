import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);


  return (
      <div>
        <NavLink to='/'>
          Home
      </NavLink> 
        <NavLink to='/contacts'>
            Contacts
          </NavLink>
        <h2>Welcome, {user.name}</h2>
          <button onClick={() => dispatch(logout())}>Logout</button>    
      </div>     
  )
}

export default UserMenu