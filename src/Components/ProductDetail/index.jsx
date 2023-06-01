function ProductDetail() {
    return (
        // Con tailwind, se pueden poner propiedades css especificas usando los corchetes [] con el valor de las propiedades dentro.
        <aside className="product-detail flex flex-col fixed right-0 top-[60px] w-[360px] bg-white border border-black rounded-lg h-[calc(100vh-60px)]">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                {/* Este svg es el icono de cerrar la ventana del product detail. */}
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>              
                </button>
            </div>
        </aside>
    )
}

export { ProductDetail }