import { createContext, ReactNode, useState } from 'react'
import { Product } from '../models/product.model'
import { ShoppingCartType } from './types'

export const ShoppingCartContext = createContext({})

interface ContextProps {
  children: ReactNode
}

export const ShoppingCartProvider = ({ children }: ContextProps) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState<number>(0)

  // Product Detail - Open/Closed
  const [isOpenDetails, setIsOpenDetails] = useState(false)

  const openDetails = (product: Product) => {
    setProductDetails(product)
    setIsOpenDetails(true)
  }
  const closeDetails = () => setIsOpenDetails(false)

  // Product Detail - Show product
  const [productDetails, setProductDetails] = useState<Product | undefined>(undefined)

  const data: ShoppingCartType = {
    count,
    isOpenDetails,
    productDetails,
    setCount,
    openDetails,
    closeDetails,
  }

  return (
    <ShoppingCartContext.Provider value={data}>{children}</ShoppingCartContext.Provider>
  )
}
