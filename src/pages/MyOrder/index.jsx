import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      MyOrder
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
