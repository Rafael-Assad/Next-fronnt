import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../Button";
import Input from "../Input";

import { RegisterFormContainer } from "./style"

const RegisterForm = ({ setAuthentication }) => {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    username: yup.string()
      .min(6, "Usuário deve ter pelo menos 6 carácteres")
      .required("Campo Obrigatório"),

    email: yup.string().email().required("Campo Obrigatório"),

    password: yup.string()
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/g,
        "Senha deve conter pelo menos: 1 Letra maiúscula, 1 Letra minúscula, 1 número e 1 caracter especial")
      .required("Campo Obrigatório"),

    password_confirmation: yup.string()
      .oneOf([yup.ref("password")], "Senhas não batem")
      .required("Campo Obrigatório")
  });

  const {register, handleSubmit, reset, formState, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const fromSubmit = async (formData) => { 
    console.log('aqui')
    const registerUrl = "http://localhost:3010/auth/signup"

    await axios.post(registerUrl, formData)
      .then(() => navigate('/'))
      .catch((err) => console.error(err.response));
  };

  useEffect(() => {
    if(formState.isSubmitSuccessful){
      reset()
    }
  }, [reset, formState])

  return (
    <RegisterFormContainer onSubmit={handleSubmit(fromSubmit)}>
        <Input
          label="Nome"
          inputName="username"
          placeholder="Escreva seu nome"
          registerItem={register}
          errors={errors}
        />
        
        <Input
          label="E-mail"
          inputName="email"
          placeholder="Qual seu e-mail?"
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


        <Input
          label="Confirme sua senha"
          inputName="password_confirmation"
          placeholder="Digite novamente sua senha"
          registerItem={register}
          errors={errors}
        />

        <div className="buttonField">
          <Button type="submit" buttonName="Enviar" />

          <Button type="reset" buttonName="Limpar" onClick={reset} />
        </div>
    </RegisterFormContainer>
  )
}

export default RegisterForm