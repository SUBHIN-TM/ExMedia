import homeImg from '../Img/Back.jpg'
import logo from '../Img/Logo.png'

const backgroundStyle = {
  backgroundImage: `url(${homeImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  minHeight: '708px'
}

const logoStyle = {
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover'



}

const MainImage = () => {
  return (
    <>
      <div className='' style={backgroundStyle}>
        <div className='flex justify-between'>
          <div className='w-1/12 items-center '>
            <div className=' mt-64 text-4xl  sm:text-6xl pl-12 '>
              <span className='text-red-500 bg-black px-5'> EXMEDIA </span>
              <p className='text-white px-5 sm:py-2 '>GRAPHICS</p>
              <p className='text-white px-5 sm:py-2'>TRANSFORMING</p>
              <p className='text-white px-5 sm:py-2'>BUSINESS STRATEGY</p>
            </div>
          </div>
          <div className='flex justify-start'>
          <div className='  w-52 h-52 mb-20 sm:mb-0 ' style={logoStyle}></div>
          </div>
          
        </div>
      </div>

    </>

  )
}

export default MainImage;