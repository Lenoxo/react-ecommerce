import Layout from '../../Components/Layout'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

function MyAccount() {
  const context = useContext(ShoppingCartContext)

  // Obtener los datos del usuario almacenados en el LocalStorage
  const { name, email, password } = JSON.parse(localStorage.getItem('user-data'))

  // Manejar el cierre de sesión
  const handleLogout = () => {
    context.setLogged(false)
    localStorage.setItem('logged', 'false')
  }

  return (
    <Layout>
      {/* Encabezado de la página */}
      <h1 className='font-medium text-xl'>My Account</h1>

      {/* Información del usuario */}
      <div className='flex flex-col text-md font-normal mt-4 items-center border border-black rounded-lg px-8 py-4'>
        <p>Name</p>
        {/* Mostrar el nombre del usuario */}
        <p className='font-light mb-4 rounded-lg bg-zinc-200 p-2 text-sm'>{name}</p>

        <p>Email</p>
        {/* Mostrar el email del usuario */}
        <p className='font-light mb-4 rounded-lg bg-zinc-200 p-2 text-sm'>{email}</p>

        <p>Password</p>
        {/* Mostrar la contraseña del usuario */}
        <p className='font-light mb-4 rounded-lg bg-zinc-200 p-2 text-sm'>{password}</p>

        {/* Enlace de cierre de sesión */}
        <NavLink to='/login' onClick={handleLogout} className='w-full'>
          <button className='font-semibold bg-black text-white p-3 rounded-lg w-full'>Logout</button>
        </NavLink>
      </div>
    </Layout>
  )
}

export default MyAccount