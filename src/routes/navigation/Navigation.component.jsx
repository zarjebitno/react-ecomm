import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"

import {ReactComponent as Logo} from '../../assets/images/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo/>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">Shop</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation