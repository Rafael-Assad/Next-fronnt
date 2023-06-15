import Button from '../Button'
import { ButtonFieldContainer } from './style'

const ButtonField = ({reset}) => {
  return (
    <ButtonFieldContainer>
        <Button type="submit" buttonName="Enviar" />

        <Button type="reset" buttonName="Limpar" onClick={reset} />
    </ButtonFieldContainer>
  )
}

export default ButtonField