import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { Link } from "react-router-dom"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        {/* Icono de volver a My Orders */}
        <Link to='/my-orders' className="absolute left-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="w-80">
        {
          // Aquí renderizo cada elemento dentro del cartProducts usando el componente OrderCard.
          context.order[0]?.products.map((product) => {
            return (
              <OrderCard
                key={product.id}
                productInfo={product}
              />
            )
          })
        }
      </div>
    </Layout>
  )
}

export { MyOrder }
