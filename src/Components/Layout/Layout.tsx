import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return <div className='flex flex-col items-center mt-4 px-8'>{children}</div>
}

export default Layout
