function Card({ category, title, image, price }) { // Estos datos los recibo por props.
  return (
    <div className="bg-white cursor-pointer w-56 h-68 rounded-lg">
    <figure className="relative mb-2 w-full h-4/5 rounded-lg">
        <span className="absolute bottom-0 left-0 bg-zinc-300 rounded-lg text-black text-xs m-2 px-3 py-0.5">
        {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
        <button className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white m-2 p-1 w-6 h-6">
        <p>+</p>
        </button>
    </figure>
    <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lm font-bold">${price}</span>
    </p>
    </div>
  )
}

export { Card }