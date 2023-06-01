import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
const API = "https://api.escuelajs.co/api/v1/products"

function Home() {
  const [products, setProducts] = useState(null)
  // Aquí uso useEffect porque estoy consumiendo la API de Platzi Fake Store
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.log(error))
  }, []) // El array de dependencias vacio está aquí para hacer que se ejecute solo una vez este efecto.

  return (
    <Layout>
      Home
      {/* Esta es la sección de los productos*/}
      <section className="grid grid-cols-3 gap-2 w-full max-w-screen-lg place-items-center">
        {
          products?.map(product => {
            // Envio por props los datos necesarios para renderizar las Cards.
            return <Card key={product.id} category={product.category.name} image={product.category.image} title={product.title} price={product.price}/>
          })
        }
      </section>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
