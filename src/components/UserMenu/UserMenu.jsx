import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from "./UserMenu.module.css"

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
      <div className={css.divForUsermenu}>
          <div className={css.divNav}>
                 <NavLink to='/' className={css.navTitle} >
          Home
      </NavLink> 
        <NavLink className={css.navTitle} to='/contacts'>
            Contacts
          </NavLink>     
        </div>

        <h3 className={css.navTitle} >Welcome, {user.name}</h3>
          <button className={css.btnLogout} onClick={() => dispatch(logout())}>Logout</button>    
      </div>     
  )
}

export default UserMenu