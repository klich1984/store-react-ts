import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

import './styles.css'
import { ShoppingCartContext } from '../../context/Index'
import { ShoppingCartType } from '../../context/types'

const ProductDetail = () => {
  const { isOpenDetails, closeDetails, productDetails } = useContext(
    ShoppingCartContext
  ) as ShoppingCartType

  return (
    <aside
      className={`${
        isOpenDetails ? 'flex' : 'hidden'
      } product--detail flex-col fixed right-0 border-black border-2 rounded-lg bg-white`}
    >
      <header className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl text-cyan-800'>Titulo</h2>
        <span>
          <XMarkIcon
            className='h-8 w-8 text-cyan-800 cursor-pointer'
            onClick={closeDetails}
          />
        </span>
      </header>
      <section className='p-4 pt-0'>
        <figure className='mb-5 rounded-lg'>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={productDetails?.images[0]}
            alt={productDetails?.title}
          />
        </figure>
        <div className='flex flex-col gap-y-3'>
          <p className='text-lg font-bold '>{productDetails?.title}</p>
          <p>{productDetails?.description}</p>
          <footer className='flex justify-between items-center'>
            <p className='bg-cyan-800/80 rounded-lg text-xs px-2 py-1 text-white'>
              {productDetails?.category.name}
            </p>
            <p className='self-end font-semibold text-3xl'>${productDetails?.price}</p>
          </footer>
        </div>
      </section>
    </aside>
  )
}

export default ProductDetail
