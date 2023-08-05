import Card from '../Components/Card/Card'
import useGetProducts from '../hooks/useGetProducts'

const Home = () => {
  const { products } = useGetProducts()
  return (
    <main className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </main>
  )
}

export default Home
