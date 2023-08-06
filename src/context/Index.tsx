import { createContext, ReactNode, useState } from 'react'

export const ShoppingCartContext = createContext({})

interface ContextProps {
  children: ReactNode
}

export const ShoppingCartProvider = ({ children }: ContextProps) => {
  const [count, setCount] = useState<number>(0)

  const data = { count, setCount }
  return (
    <ShoppingCartContext.Provider value={data}>{children}</ShoppingCartContext.Provider>
  )
}
