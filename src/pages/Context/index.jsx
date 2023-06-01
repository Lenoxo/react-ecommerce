import { createContext, useState } from "react"
import { ProductDetail } from "../../Components/ProductDetail"

const ShoppingCartContext = createContext()

function ShoppingCartProvider({children}) {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    function openProductDetail() {
        setIsProductDetailOpen(true)
    }
    function closeProductDetail() {
        setIsProductDetailOpen(false)
    }
    return (
        // Exporto así el elemento para que sea un poco más facil de leer desde otros archivos, como en App/index.jsx
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }