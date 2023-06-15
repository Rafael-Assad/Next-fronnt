import { Link } from "react-router-dom"
import { HeaderConteiner } from "./style"

import logoImg from "../../assets/logo.png"

const Header = () => {
  const authenticated = window.localStorage.getItem("authenticated")
  return (
    <HeaderConteiner>

    <Link to='/login'>
      <figure>
        <img alt="Nex Logo" src={logoImg}/>
      </figure>
    </Link>

    <div>
      {authenticated ?
        <Link to='/'>
          Products
        </Link> :
        <Link to='/register'>
          Register
        </Link>
      }
    </div>
    </HeaderConteiner>
  )
}

export default Header