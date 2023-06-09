import Layout from '../../Components/Layout'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

function MyAccount() {
  const context = ShoppingCartContext
  const {name, email, password} = JSON.parse(localStorage.getItem('user-data'))

  const handleLogout = () => {
    localStorage.setItem('logged', 'false')
    context.setLogged(false)
  }
  return (
    <Layout>
      MyAccount
      <div className='flex flex-col text-md font-medium items-center border border-black rounded-lg p-3'>
        <p>Name</p>
        <p className='font-light mb-4 rounded-lg bg-zinc-200 p-2 text-sm'>{name}</p>
        <p>Email</p>
        <p className='font-light mb-4 rounded-lg bg-zinc-200 p-2 text-sm'>{email}</p>
        <p>Password</p>
        <p className='font-light mb-4 rounded-lg bg-zinc-200 p-2 text-sm'>{password}</p>
        <NavLink to='/login' onClick={handleLogout}>
          <button className='font-semibold bg-black text-white p-3 rounded-lg'>Logout</button>
        </NavLink>
      </div>
    </Layout>
  )
}

export default MyAccount