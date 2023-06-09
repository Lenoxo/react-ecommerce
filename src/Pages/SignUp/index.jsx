import { useContext, useEffect } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'

function SignUp() {
  const context = useContext(ShoppingCartContext)

  useEffect(() => {
    // Guardar el estado "logged" en el almacenamiento local cuando cambie
    localStorage.setItem('logged', JSON.stringify(context.logged))
  }, [context.logged])

  const handleSubmit = (event) => {
    event.preventDefault()

    // Obtener los valores de los campos del formulario
    const name = event.target.elements.name.value
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value

    // Crear un objeto con los datos del usuario
    const userData = { name, email, password }

    // Guardar los datos del usuario en el almacenamiento local
    localStorage.setItem('user-data', JSON.stringify(userData))

    // Actualizar el estado "logged" en el contexto
    context.setLogged(true)

    // Redirigir a la página principal
    window.location.href = '/'
  }

  return (
    <Layout>
      <h1 className='font-semibold text-xl'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4 pt-4'>
        <label className='font-semibold text-lg'>Your Name</label>
        <input className='text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2' type="text" name="name" placeholder='Juan Juanez Perez' />
        <label className='font-semibold text-lg'>Your Email</label>
        <input className='text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2' type="text" name="email" placeholder='example@gmail.com' />
        <label className='font-semibold text-lg'>Create Your Password</label>
        <input className='text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2' type="password" name="password" placeholder='Buy Something' />
        <button className='p-4 text-lg font-semibold bg-black text-white w-full rounded-lg' type='submit'>Create Account</button>
      </form>
    </Layout>
  )
}

export default SignUp