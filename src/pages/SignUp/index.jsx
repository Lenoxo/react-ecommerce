import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../Context"
import { useNavigate } from "react-router-dom" // Importo el hook useNavigate para la navegación.

// Página para crear un usuario y guardar sus datos en localStorage.
function SignUp() {
  const context = useContext(ShoppingCartContext)
  const navigate = useNavigate()
  const handleSignUp = (event) => {
    event.preventDefault()
    // Toma del evento de Submit los valores de cada input, y los guarda en userData.
    const name = event.target.elements.name.value
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    const userData = { name, email, password }

    // Se guarda en localStorage userData.
    localStorage.setItem("user-data", JSON.stringify(userData))

    // Se actualiza en Context el estado logged y se guarda en localStorage.
    context.setLogged(true)
    localStorage.setItem("logged", "true")
    navigate("/") // Redirige a la página principal.
  }

  return (
    <Layout>
      <h1 className="font-medium text-xl">Sign Up</h1>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col items-center space-y-4 pt-4"
      >
        <label className="font-medium text-lg">Your Name</label>
        <input
          className="text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2"
          type="text"
          name="name"
          placeholder="Juan Juanez Perez"
        />
        <label className="font-medium text-lg">Your Email</label>
        <input
          className="text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2"
          type="text"
          name="email"
          placeholder="example@gmail.com"
        />
        <label className="font-medium text-lg">Create Your Password</label>
        <input
          className="text-center bg-zinc-300 border border-zinc-900 rounded-lg py-2"
          type="password"
          name="password"
          placeholder="Buy Something"
        />
        <button
          className="p-4 text-lg font-semibold bg-black text-white w-full rounded-lg"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </Layout>
  )
}

export { SignUp }