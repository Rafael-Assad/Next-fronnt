import { useEffect, useState } from "react";
import {Routes as Switch, Route, useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'

import Login from './pages/Login'
import Home from './pages/Home'
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

      window.localStorage.setItem("authenticated", false)
    }

    axios.get(authUrl, {headers:{ Authorization: token }})
      .then(() => {
        setAuthentication(true)

        window.localStorage.setItem("authenticated", true)
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
    if(location.pathname !== '/login' && location.pathname !== '/register' ){
      navigate('/login')
    }
    
    return (
      <Switch>
      <Route path='/login'
        element={ <Login setAuthentication={setAuthentication}/> }
      />

      <Route path='/register'
        element={ <Register/> }
      />
    </Switch>)
  }

  return (
    <Switch>
      <Route path='/login'
        element={ <Login setAuthentication={setAuthentication}/> }
      />

      <Route path='/'
        element={ <Home/> }
      />

      <Route path='/register'
        element={ <Register/> }
      />
    </Switch>
  )
}

export default Routes