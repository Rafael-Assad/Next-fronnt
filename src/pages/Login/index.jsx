import LoginForm from "../../components/LoginForm"
import { LoginContainer } from "./style"

const Login = ({setAuthentication}) => {
  return (
    <LoginContainer>
      <LoginForm setAuthentication={setAuthentication}/>
    </LoginContainer>
  )
}

export default Login