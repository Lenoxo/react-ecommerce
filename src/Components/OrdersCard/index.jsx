function OrdersCard(props) {
    const { totalPrice, totalProducts, date } = props
  
    return (
      <div className="flex items-center px-3 py-3 my-3 hover:bg-gray-200 rounded-lg">
        <p className="flex items-center gap-4">
          <span className="text-gray-800 font-medium">Date: {date}</span>
          <span className="text-gray-800">Products: {totalProducts}</span>
          <span className="text-gray-800 font-medium text-lg">Price: ${totalPrice}</span>
        </p>
      </div>
    )
  }
  
  export { OrdersCard }
  