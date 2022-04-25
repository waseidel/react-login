import { object, string } from 'yup'

const LoginValidation = object().shape({
  email: string().required('El correo es obligatorio').email('Digite um e-mail válido'),
  password: string()
    .required('La contraseña es obligatoria')
})

export default LoginValidation
