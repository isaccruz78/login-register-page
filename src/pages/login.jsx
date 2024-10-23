import '../pages/login-register.css'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { UserValidationSchemaLogin } from '../utils/validation'
import Axios from 'axios'
import Button from '../components/button/button'
import CheckboxRemenber from '../components/checkbox-remenber/checkbox-remenber'
import FormLink from '../components/form-link/form-link'
import Input from '../components/input/input'
import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Login = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(UserValidationSchemaLogin)
  });

  const SendDataInput = (data) => {

    Axios.post("http://localhost:3001/", {
      EmailLogin: data.EmailLogin,
      PasswordLogin: data.PasswordLogin,
    }).then((response) => {
      if (response.status === 200) {
        alert("Login realizado com sucesso!");
        window.location.reload();
      };
    }).catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          alert("Email não cadastrado ou senha incorreta. Por favor, tente novamente.");
        } else {
          alert("Ocorreu um erro desconhecido. Por favor, tente novamente ou verifique a conexão com o banco de dados.");
        }
      } else {
        alert("Ocorreu um erro desconhecido. Por favor, tente novamente ou verifique a conexão com o servidor.");
      }
    });

  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(SendDataInput)}>

        <h1>Login</h1>

        <Input
          name="EmailLogin"
          type="text"
          placeholder='Email'
          register={register}
          Icon={MdEmail}
          error={errors.EmailLogin}
        />

        <Input
          name="PasswordLogin"
          type="password"
          placeholder='Senha'
          register={register}
          Icon={FaLock}
          error={errors.PasswordLogin}
        />

        <CheckboxRemenber
          type="checkbox"
          text="Relembre-me"
          textLink="Esqueceu sua senha?"
        />

        <Button
          text="Entrar"
          type="submit"
        />

        <FormLink
          text="Não possui uma conta?"
          route="/register"
          linkText="Cadastre-se"
        />

      </form>
    </div>
  )
}

export default Login