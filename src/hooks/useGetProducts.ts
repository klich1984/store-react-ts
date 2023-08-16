import { useEffect, useState } from 'react'
import { Product } from '../models/product.model'

const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  const url = `https://api.escuelajs.co/api/v1/products?limit=40&offset=0`

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const dataJson = await fetch(url)
        const data = await dataJson.json()
        setProducts(data)
      } catch (error) {
        console.error('Problema en la peticion de productos', error)
      }
    }

    fetchData(url)
  }, [])

  return { products }
}

export default useGetProducts
