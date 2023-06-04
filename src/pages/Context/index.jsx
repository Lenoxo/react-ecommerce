import { createContext, useState, useEffect } from "react"
const API = "https://api.escuelajs.co/api/v1/products"

const ShoppingCartContext = createContext()

function ShoppingCartProvider({ children }) {
  // Conteo de items en el ShoppingCart
  const [count, setCount] = useState(0)

  // Relacionado a ProductDetail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false) // Almacena un valor para posteriormente mostrar/ocultar ProductDetail.
  const [productToShow, setProductToShow] = useState({}) // Almacena los datos del producto que se muestra en ProductDetail.
  function openProductDetail() {
    setIsProductDetailOpen(true)
  }
  function closeProductDetail() {
    setIsProductDetailOpen(false)
  }
  // ProductCart

  // Almacena en un estado, un array con los productos dentro del carrito de compras (ShoppingCart)
  const [cartProducts, setCartProducts] = useState([])

  // CheckoutSideMenu

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  function openCheckoutSideMenu() {
    setIsCheckoutSideMenuOpen(true)
  }
  function closeCheckoutSideMenu() {
    setIsCheckoutSideMenuOpen(false)
  }

  // Este estado almacena la orden cuando se hace click en Checkout en CheckoutSideMen
  const [order, setOrder] = useState([])

  // Product Search/Filter

  const [products, setProducts] = useState(null)
  // Aquí uso useEffect porque estoy consumiendo la API de Platzi Fake Store
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
    }, []) // El array de dependencias vacio está aquí para hacer que se ejecute solo una vez este efecto.
    
    // Almacena el valor del input en Home.
    const [productSearchVaule, setProductSearchValue] = useState('')
    // Almacena los productos filtrados.
    const [filteredProducts, setFilteredProducts] = useState()

    // Filtra los productos, recibiendo un array y un texto como valor de búsqueda.
    function filteredProductsByTitle(arrayWithProducts, searchValue) {
        // Aquí uso toLowerCase para que no importe si el titulo del producto, o lo que los usuarios escriben esté en mayúsculas o minúsculas.
        return arrayWithProducts?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

  // Este efecto modifica el estado de filteredProducts cuando cambia el valor de productSearchVaule
  useEffect(() => {
    if (productSearchVaule.length > 0) {
      setFilteredProducts(filteredProductsByTitle(products, productSearchVaule))
    } else {
      setFilteredProducts(products) // En los casos en que productSearchVaule está vacio, dejo el estado definido por products para que se puedan renderizar los componentes facilmente desde Home.
    }
  }, [products, productSearchVaule])

  return (
    // Exporto así el elemento para que sea un poco más facil de leer desde otros archivos, como en App/index.jsx
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        productSearchVaule,
        setProductSearchValue,
        filteredProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext }
