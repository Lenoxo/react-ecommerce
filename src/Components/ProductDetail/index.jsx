function ProductDetail() {
    return (
        // Con tailwind, se pueden poner propiedades css especificas usando los corchetes [] con el valor de las propiedades dentro.
        <aside className="product-detail flex flex-col fixed right-0 top-[60px] w-[360px] bg-white border border-black rounded-lg h-[calc(100vh-60px)]">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <p>x</p>
            </div>
        </aside>
    )
}

export { ProductDetail }