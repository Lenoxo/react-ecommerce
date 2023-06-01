import { useContext } from "react"
import { ShoppingCartContext } from "../../pages/Context"

function Card({ category, title, image, price, description }) { // Estos datos los recibo por props.
  const productData = { category, title, image, price, description } // Guardo los datos dentro para enviarlos de forma más sencilla a otras funciones.
  const context = useContext(ShoppingCartContext)

  function showProduct(productDetailData) {
    context.openProductDetail()
    context.setProductToShow(productDetailData)
  }

  function addToCart(productCartData) { // Esta funcion solo se llama cuando los usuarios hacen click en el simbolo de añadir dentro de la Card.
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productCartData])
  }
  return (
    <div 
      className="bg-white cursor-pointer w-56 h-68 rounded-lg"
      onClick={() => showProduct(productData)}>
    <figure className="relative mb-2 w-full h-4/5 rounded-lg">
        <span className="absolute bottom-0 left-0 bg-zinc-300 rounded-lg text-black text-xs m-2 px-3 py-0.5">
        {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
        <button 
          className="absolute top-0 right-0 flex justify-center items-center m-2 w-6 h-6"
          onClick={() => addToCart(productData)}
        >
          {/* Este svg es el del icono de añadir al carrito. */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 bg-white rounded-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
    </figure>
    <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lm font-bold">${price}</span>
    </p>
    </div>
  )
}

export { Card }