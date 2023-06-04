import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../Context"

function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <h1 className="font-extralight text-xl">Time to get you something great!</h1>
      <input type="text" className="p-3 my-6 border border-slate-950 rounded-lg focus:outline-none" placeholder="Search a product" onChange={(event) => context.setProductSearchValue(event.target.value)}/>
      {/* Esta es la sección de los productos*/}
      <section className="grid grid-cols-3 gap-2 w-full max-w-screen-lg place-items-center">
        {
          context.filteredProducts?.map(product => {
            // Envio por props los datos necesarios para renderizar las Cards.
            return <Card key={product.id} id={product.id} category={product.category.name} image={product.category.image} title={product.title} price={product.price} description={product.description}/>
          })
        }
      </section>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
