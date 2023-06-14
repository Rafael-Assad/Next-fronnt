import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { LoginFormContainer } from "./style"
import Input from "../Input";
import Button from "../Button";

const LoginForm = ({ setAuthentication }) => {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {register, handleSubmit, reset, formState, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const fromSubmit = async (formData) =>{ 
    const loginUrl = "http://localhost:3010/auth/signin/"

    await axios.post(loginUrl, formData)
    .then((response) => {
      console.log(response)
      window.localStorage.setItem("authToken", response.data.accessToken)
      setAuthentication(true);
      navigate("/products");
    })
    .catch((error) =>
      console.error(error)
    );
  };

  useEffect(() => {
    if(formState.isSubmitSuccessful){
      reset()
    }
  }, [reset, formState])

  return (
    <LoginFormContainer onSubmit={handleSubmit(fromSubmit)}>
        <Input
          label="Nome"
          inputName="username"
          placeholder="Escreva seu nome"
          registerItem={register}
          errors={errors}
        />

        <Input
          label="Senha"
          inputName="password"
          placeholder="Digite sua senha"
          registerItem={register}
          errors={errors}
        />


        <div className="buttonField">
          <Button type="submit" buttonName="Enviar" />

          <Button type="reset" buttonName="Limpar" onClick={reset} />
        </div>
    </LoginFormContainer>
  )
}

export default LoginForm