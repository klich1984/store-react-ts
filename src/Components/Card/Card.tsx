const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-4 w-full h-4/5 overflow-hidden'>
        <div className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full'>
          +
        </div>
        <img
          className='w-full h-full object-cover rounded-lg'
          src='https://picsum.photos/200/300'
          alt='headpones'
        />
        <span className='absolute bottom-0 bg-white/60 rounded-lg text-xs m-2 px-2 py-1 text-black'>
          Electronics
        </span>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>Headpones:</span>
        <span className='text-lg font-medium'>$300</span>
      </p>
    </div>
  )
}

export default Card
