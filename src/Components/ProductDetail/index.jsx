import { useContext } from "react"
import { ShoppingCartContext } from "../../pages/Context"

function ProductDetail() {
    const context = useContext(ShoppingCartContext)
    const { category, title, image, price, description } = context.productToShow
    return (
        // Con tailwind, se pueden poner propiedades css especificas usando los corchetes [] con el valor de las propiedades dentro.
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex flex-col fixed right-0 top-[60px] w-[360px] bg-white border border-black rounded-lg h-[calc(100vh-60px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                {/* Este svg es el icono de cerrar la ventana del product detail. */}
                <button onClick={() => context.closeProductDetail()} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>            
                </button>
            </div>
            <figure className="px-6 relative">
                <img src={image} alt={title} className="w-full h-full rounded-lg" />
                <span className="absolute bottom-0 left-0 bg-zinc-300 rounded-lg text-black text-xs ml-9 mb-3 px-3 py-0.5">
                {category}
                </span>
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl">${price}</span>
                <span className="font-medium text-lg my-1">{title}</span>
                <span className="font-normal text-md">{description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail }