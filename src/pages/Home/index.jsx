import LoginForm from "../../components/LoginForm"
import { HomeContainer } from "./style"

const Home = ({setAuthentication}) => {
  return (
    <HomeContainer>
      <LoginForm setAuthentication={setAuthentication}/>
    </HomeContainer>
  )
}

export default Home