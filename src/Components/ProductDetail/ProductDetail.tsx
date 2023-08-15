import { XMarkIcon } from '@heroicons/react/20/solid'

import './styles.css'

const ProductDetail = () => {
  return (
    <aside className='product--detail flex flex-col fixed right-0 border-black border-2 rounded-lg bg-white '>
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl text-cyan-800'>Titulo</h2>
        <span>
          <XMarkIcon className='h-8 w-8 text-cyan-800' />
        </span>
      </div>
    </aside>
  )
}

export default ProductDetail
