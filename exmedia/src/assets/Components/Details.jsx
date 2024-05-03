import para from '../Img/1.jpg'
import brand from '../Img/3.jpg'

const Details = () => {

    return (
        <>
            <div className="parallax" style={{
                backgroundImage: `url(${para})`,
                height: '300px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </div>
            <div className='innerPara grid md:flex   bg-black'>
                <div className='text-white w-3/4  p-5'  > <img src={brand} alt="" />  </div>
                <div className='text-red-600   pt-16 bg-black p-5  w-9/12 flex justify-center items-center'>
                    <div className='border p-12'>
                        <p className='text-7xl py-1' >START STRONG</p>
                        <p className='text-5xl py-1'>WITH EFFECTIVE</p>
                        <p className='text-4xl py-1 text-white font-bold'>BRANDING</p>
                        <span className='flex  mt-3'>
                            <span className='border p-2 mr-2 rounded-lg'>CREATIVE TEAM </span>
                            <span className='border  p-2  mr-2  rounded-lg'>INNOVATION IDEAS </span>
                            <span className='border  p-2  rounded-lg'> BEST SERVICES </span>
                        </span>

                    </div>


                </div>

            </div>
            <div className="parallax" style={{
                backgroundImage: `url(${para})`,
                height: '200px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </div>
        </>

    )
}

export default Details;