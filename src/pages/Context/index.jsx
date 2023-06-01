import { createContext, useState } from "react"
import { ProductDetail } from "../../Components/ProductDetail"

const ShoppingCartContext = createContext()

function ShoppingCartProvider({children}) {
    // Conteo de items en el ShoppingCart
    const [count, setCount] = useState(0)

    // Relacionado a ProductDetail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    function openProductDetail() {
        setIsProductDetailOpen(true)
    }
    function closeProductDetail() {
        setIsProductDetailOpen(false)
    }

    const [productToShow, setProductToShow] = useState({})

    return (
        // Exporto así el elemento para que sea un poco más facil de leer desde otros archivos, como en App/index.jsx
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }