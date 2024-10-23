import '../pages/login-register.css'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { UserValidationSchemaRegister } from '../utils/validation'
import Axios from 'axios'
import Button from '../components/button/button'
import CheckboxTerms from '../components/checkbox-terms/checkbox-terms'
import FormLink from '../components/form-link/form-link'
import Input from '../components/input/input'
import { FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLock } from "react-icons/fa"

const Register = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(UserValidationSchemaRegister)
  });

  const SendDataInput = (data) => {

    Axios.post("http://localhost:3001/register", {
      UsernameRegister: data.UsernameRegister,
      EmailRegister: data.EmailRegister,
      PasswordRegister: data.PasswordRegister,
    }).then((response) => {
      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = '/';
      };
    }).catch((error) => {
      if (error.response) {
        if (error.response.status === 409) {
          alert("Esse email já está cadastrado. Por favor, insira outro e tente novamente.");
        } else {
          alert("Ocorreu um erro desconhecido. Tente novamente ou verifique a conexão com o banco de dados.");
        }
      } else {
        alert("Ocorreu um erro desconhecido. Por favor, tente novamente ou verifique a conexão com o servidor.");
      }
    });

  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(SendDataInput)}>

        <h1>Cadastro</h1>

        <Input
          name="UsernameRegister"
          type="text"
          placeholder='Usuário'
          register={register}
          Icon={FaUser}
          error={errors.UsernameRegister}
        />

        <Input
          name="EmailRegister"
          type="text"
          placeholder='Email'
          register={register}
          Icon={MdEmail}
          error={errors.EmailRegister}
        />

        <Input
          name="PasswordRegister"
          type="password"
          placeholder='Senha'
          register={register}
          Icon={FaLock}
          error={errors.PasswordRegister}
        />

        <CheckboxTerms
          name="TermsOfUseRegister"
          type="checkbox"
          register={register}
          text="Aceitar os"
          textLink="Termos de Uso"
          error={errors.TermsOfUseRegister}
        />

        <Button
          text='Cadastrar'
          type="submit"
        />

        <FormLink
          text="Possui uma conta?"
          route="/"
          linkText="Faça Login"
        />

      </form>
    </div>
  )
}

export default Register