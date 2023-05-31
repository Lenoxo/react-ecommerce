import { createContext, useState } from "react"

const ShoppingCartContext = createContext()

function ShoppingCartProvider({children}) {
    const [count, setCount] = useState(0)
    return (
        // Exporto así el elemento para que sea un poco más facil de leer desde otros archivos, como en App/index.jsx
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }