import { ButtonContainer } from "./style"


const Button = ({buttonName, type='button', ...rest}) => {
  return (
    <ButtonContainer type={type} {...rest}>
      {buttonName}
    </ButtonContainer>
  )
}

export default Button