import Layout from '../../Components/Layout'
import { NavLink } from 'react-router-dom'

function MyAccount() {
  const {name, email, password} = JSON.parse(localStorage.getItem('user-data'))

  const handleLogout = () => {
    localStorage.removeItem('user-data')
  }
  return (
    <Layout>
      MyAccount
      <div className='flex flex-col text-md font-medium items-center border border-black rounded-lg p-3'>
        <p>Name</p>
        <p className='font-light pb-4 rounded-lg'>{name}</p>
        <p>Email</p>
        <p className='font-light pb-4 rounded-lg'>{email}</p>
        <p>Password</p>
        <p className='font-light pb-4 rounded-lg'>{password}</p>
        <NavLink to='/login' onClick={handleLogout}>
          <button className='font-semibold bg-black text-white p-3 rounded-lg w-full'>Logout</button>
        </NavLink>
      </div>
    </Layout>
  )
}

export default MyAccount