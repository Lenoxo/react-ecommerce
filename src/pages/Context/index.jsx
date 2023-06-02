import { createContext, useState } from "react"

const ShoppingCartContext = createContext()

function ShoppingCartProvider({children}) {
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

    return (
        // Exporto así el elemento para que sea un poco más facil de leer desde otros archivos, como en App/index.jsx
        <ShoppingCartContext.Provider value={{
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
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }