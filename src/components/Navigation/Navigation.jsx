import { NavLink } from 'react-router-dom'
import css from "./Navigation.module.css"

const Navigation = () => {
  return (
      <div className={css.divForNavigation}>
        <NavLink to='/' className={css.navTitle} >
          Home
          </NavLink>
          <div className={css.divNav}>
                  <NavLink to='/register' className={css.navTitle} >
        Register
      </NavLink>
      <NavLink to='/login' className={css.navTitle} >
        Log in
    </NavLink>  
          </div>

    </div>
  )
}

export default Navigation