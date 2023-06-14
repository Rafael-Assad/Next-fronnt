import {Routes as Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'

const Routes = () => {
  return (
    <Switch>
      <Route path='/'
        element={ <Home/> }
      />

      <Route path='/about'
        element={ <Products/> }
      />
    </Switch>
  )
}

export default Routes