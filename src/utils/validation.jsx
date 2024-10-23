import * as Yup from 'yup'

export const UserValidationSchemaLogin = Yup.object().shape({
    EmailLogin: Yup.string().required('Email é obrigatório.').email('Informe um email válido.'),
    PasswordLogin: Yup.string().required('Senha é obrigatória.'),
});

export const UserValidationSchemaRegister = Yup.object().shape({
    UsernameRegister: Yup.string().required('Nome de usuário é obrigatório.'),
    EmailRegister: Yup.string().required('Email é obrigatório.').email('Informe um email válido.'),
    PasswordRegister: Yup.string().required('Senha é obrigatória.').min(8, 'Senha deve ter no mínimo 8 caracteres.'),
    TermsOfUseRegister: Yup.bool().oneOf([true], 'Aceite os termos de uso.'),
});