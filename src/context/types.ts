import { Product } from '../models/product.model'

export type ShoppingCartType = {
  count: number
  isOpenDetails: boolean
  productDetails: Product | undefined
  setCount: (value: number) => void
  openDetails: (product: Product) => void
  closeDetails: () => void
}
