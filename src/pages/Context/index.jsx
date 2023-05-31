import { createContext } from "react"

const ShoppingCartContext = createContext()
function ShoppingCartProvider({children}) {
    return (
        // Exporto así el elemento para que sea un poco más facil de leer desde otros archivos, como en App/index.jsx
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider }