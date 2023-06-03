function OrdersCard(props) {
    const { totalPrice, totalProducts } = props
    return (
        <div className="flex items-center px-3 py-3 gap-4">
            <p>
                <span>Date: jul 01 23</span>
                <span className="font-medium text-lg">Price: {totalPrice}</span>
                <span>Products: {totalProducts}</span>
            </p>
        </div>
    )
}

export { OrdersCard }