import { object, ref, string } from 'yup'

const LoginValidation = object().shape({
  email: string().required('El correo es obligatorio').email('Digite um e-mail válido'),
  password: string()
    .min(6, 'la contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  passwordConfirmation: string().oneOf([ref('password'), null], 'Las contraseñas no coinciden'),
  name: string().required('El nombre es obligatorio'),
  lastName: string().required('El apellido es obligatorio')
})

export default LoginValidation
