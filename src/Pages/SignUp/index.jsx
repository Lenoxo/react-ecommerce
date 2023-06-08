import { useContext, useEffect } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'

function SignUp() {
  const context = useContext(ShoppingCartContext)

  // Añado este useEffect porque los estados se manejan de forma asincrona.
  useEffect(() => {
    localStorage.setItem('logged', JSON.stringify(context.logged))
  }, [context.logged])

  const onSubmit = (event) => {
    event.preventDefault()
    const name = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value
    const userData = {name, email, password}
    localStorage.setItem('user-data', JSON.stringify(userData))
    context.setLogged(true)
  }

  return (
    <Layout>
      <h1 className='font-semibold text-xl'>Sign Up</h1>
      <form onSubmit={onSubmit} className='flex flex-col items-center space-y-4 pt-4'>
        <label className='font-semibold text-lg' htmlFor="">Your Name</label>
        <input className='text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2' type="text" placeholder='Juan Juanez Perez' />
        <label className='font-semibold text-lg' htmlFor="">Your Email</label>
        <input className='text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2' type="text" placeholder='example@gmail.com' />
        <label className='font-semibold text-lg' htmlFor="">Create Your Password</label>
        <input className='text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2' type="password" placeholder='Buy Something' />
        <button className='p-4 text-lg font-semibold bg-black text-white w-full rounded-lg' type='submit'>Create Account</button>
      </form>
    </Layout>
  )
}

export default SignUp