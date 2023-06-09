import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"

function Login() {
  const context = useContext(ShoppingCartContext)
  const [loginFailed, setLoginFailed] = useState(false)

  useEffect(() => {
    localStorage.setItem("logged", JSON.stringify(context.logged))
  }, [context.logged])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const loginData = {
      email: event.target[0].value,
      password: event.target[1].value,
    }
    const userSavedData = JSON.parse(localStorage.getItem("user-data"))
    const isLoggedIn =
      userSavedData &&
      userSavedData.email === loginData.email &&
      userSavedData.password === loginData.password

    context.setLogged(isLoggedIn)
    setLoginFailed(!isLoggedIn)
  }

  return (
    <Layout>
      <h1 className="font-semibold text-xl mb-6">Login</h1>
      {loginFailed && (
        <p className="font-light bg-red-200 text-md rounded-lg p-2">
          Email or Password doesn't match, check them and try again
        </p>
      )}
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center space-y-4 pt-4">
        <label className="font-semibold text-lg">Your Email</label>
        <input
          className="text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2"
          type="text"
          placeholder="example@gmail.com"
        />
        <label className="font-semibold text-lg">Your Password</label>
        <input
          className="text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2"
          type="password"
          placeholder="Buy Something"
        />
        <button className="p-4 text-lg font-semibold bg-black text-white w-full rounded-lg" type="submit">
          Login
        </button>
        <label className="font-light text-lg">Not having an account?</label>
        <Link to="/sign-up" className="w-full">
          <button className="p-4 text-lg font-semibold bg-inherit text-inherit w-full rounded-lg border border-black">
            Create Your Account
          </button>
        </Link>
      </form>
    </Layout>
  )
}

export { Login }
