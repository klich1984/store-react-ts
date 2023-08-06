import { Product } from '../../models/product.model'

interface CardProps {
  product: Product
}

const Card = ({ product }: CardProps) => {
  const { category, price, title, images } = product
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-4 w-full h-4/5 overflow-hidden'>
        <div className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full'>
          +
        </div>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={images[0]}
          alt={title}
        />
        <span className='absolute bottom-0 bg-white/60 rounded-lg text-xs m-2 px-2 py-1 text-black'>
          {category.name}
        </span>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}:</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export default Card
