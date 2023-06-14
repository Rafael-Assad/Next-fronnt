import { useEffect, useState } from "react";
import {Routes as Switch, Route, useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'

import Home from './pages/Home'
import Products from './pages/Products'
import Register from './pages/Register'

const Routes = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const[authentication, setAuthentication] = useState(undefined)
  const[firstAuth, setFirstAuth] = useState(true)

  const authUrl = "http://localhost:3010/user/"

  useEffect(() => {
    const token = window.localStorage.getItem("authToken") 
  
    if(!token){
      setAuthentication(false)
      setFirstAuth(true)
    }

    axios.get(authUrl, {headers:{ Authorization: token }})
      .then(() => {
        setAuthentication(true)

        if(firstAuth) {
          navigate(location.pathname)
          setFirstAuth(false)
        }
      })
      .catch((error) => {
        console.error(error)
        setAuthentication(false)
        setFirstAuth(true)
      })
    
  }, [navigate, location, setAuthentication, setFirstAuth, firstAuth])

  if(authentication === undefined){
    return <div>Loading...</div>
  }

  if(!authentication){
    if(location.pathname !== '/' && location.pathname !== '/register' ){
      navigate('/')
    }
    
    return (
      <Switch>
      <Route path='/'
        element={ <Home setAuthentication={setAuthentication}/> }
      />

      <Route path='/products'
        element={ <Products/> }
      />

      <Route path='/register'
        element={ <Register/> }
      />
    </Switch>)
  }

  return (
    <Switch>
      <Route path='/'
        element={ <Home setAuthentication={setAuthentication}/> }
      />

      <Route path='/products'
        element={ <Products/> }
      />

      <Route path='/register'
        element={ <Register/> }
      />
    </Switch>
  )
}

export default Routes