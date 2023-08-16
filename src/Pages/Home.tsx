import Card from '../Components/Card/Card'
import ProductDetail from '../Components/ProductDetail/ProductDetail'
import useGetProducts from '../hooks/useGetProducts'

const Home = () => {
  const { products } = useGetProducts()
  return (
    <main className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
      <ProductDetail />
    </main>
  )
}

export default Home
