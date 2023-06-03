import { ShoppingCartContext } from "../Context"
import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { Link } from "react-router-dom"

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      MyOrders
      {context.order.map((order, index) => {
        return (
          // Más adelante modificaré ese index para permitir que si se pueda ir a la orden (order) especifica.
          <Link to={`/my-orders/${index}`}>
            <OrdersCard
              key={index}
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            />
          </Link>
        )
      })}
    </Layout>
  )
}

export { MyOrders }
