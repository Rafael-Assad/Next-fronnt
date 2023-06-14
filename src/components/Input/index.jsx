import { InputContainer } from "./style"

const Input = ({inputName, label, type="text", registerItem, errors, ...rest}) => {
  return (
    <InputContainer>
      <label htmlFor={inputName}>
        {label}
      </label>

      <input type={type} 
        id={inputName}
        className={errors[inputName] && 'error'}
        {...registerItem(inputName)}
        {...rest}
      />

      <p className="errorMessage">
        {errors[inputName] && (errors[inputName].message)}
      </p>
    </InputContainer>
  )
}

export default Input