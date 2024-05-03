import para from '../Img/1.jpg'
import brand from '../Img/3.jpg'
import studio from '../Img/studio.jpg'
import robotic from '../Img/robotic.jpg'
import fingers from '../Img/fingers.jpg'

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
                <div className='text-white w-3/4  p-5 imageZoom'  > <img src={brand} alt="" />  </div>
                <div className='text-red-600   pt-16 bg-black p-5  w-9/12 flex justify-center items-center'>
                    <div className='brandBox border p-12 ml-6 sm:ml-0 '>
                        <p className='text-7xl py-1' >START STRONG</p>
                        <p className='text-5xl py-1'>WITH EFFECTIVE</p>
                        <p className='text-4xl py-1 text-white font-bold'>BRANDING</p>
                        <span className='flex  mt-3'>
                            <span className='border p-2 mr-2 rounded-lg text-white font-bold'>CREATIVE TEAM </span>
                            <span className='border  p-2  mr-2  rounded-lg text-white font-bold'>INNOVATION IDEAS </span>
                            <span className='border  p-2  rounded-lg text-white font-bold'> BEST SERVICES </span>
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

            <div className='innerPara   bg-black'>
                <div className='text-red-600 font-bold text-center text-6xl p-5 imageZoom'>WHO WE ARE</div>
                <div className='px-20 text-justify text-lg'>
                    <p className='text-white'>Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.</p><br />
                    <p className=  ' text-white pb-8'>Based on our strategy work, we create distinctive brand Your Ultimate Advertisement Company, where innovation meets creativity to redefine your brand's journey. Our agency stands as a pillar of excellence, providing a comprehensive suite of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate.</p>
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

            <div className=' grid md:flex  bg-black lg:bg-white'>
                <div className='text-white w-3/4  p-5 imageZoom1'  > <img src={studio} alt="" />  </div>
                <div className='text-red-600   pt-2 bg-black p-5  w-9/12 '>
                    <div className='  p-2 text-red-500 font-bold text-2xl'>STUDIO</div>
                    <div className='  pl-2 text-red-500 font-mono text-xl'>ELEVATE YOUR IMPACTS & CONNECT BRANDS WITH CUSTOMERS.</div>
                    <div className=' mb-8 pl-2 pt-3 text-white  text-lg text-justify'>Where Creativity Finds Its Canvas. Our Studio Is A Haven For Innovative Ideas, Bringing Visions To Life With Precision And Passion. With State-Of-The-Art Equipment And A Team Of Skilled Professionals, We Craft Captivating Visuals That Tell Compelling Stories. Whether It's Photography, Videography, Or Audio Production, Our Studio Is Equipped To Deliver Excellence In Every Frame And Note. From Concept To Execution, We Transform Concepts Into Breathtaking Realities That Leave Lasting Impressions. At Exmedia, Creativity Knows No Bounds, And Our Studio Can Convert Imagination Takes It To Another Unexpected Level. Step Into A World Of Boundless Possibilities And Let Your Brand's Story Unfold In Stunning Visual Brilliance.</div>
                    <span className='ml-2 border bg-white text-red-500 font-semibold p-2 cursor-pointer  hover:border-red-500 hover:text-white hover:bg-black hover:rounded-2xl hover:p-3'>READ MORE</span>
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

            <div className=' grid md:flex    bg-black lg:bg-white'>
                <div className= 'text-white w-3/4  p-5 imageZoom2'  > <img src={robotic} alt="" />  </div>
                <div className='text-red-600   pt-2 bg-black p-5  w-9/12 '>
                    <div className='  p-2 text-red-500 font-bold text-2xl'>GRAPHICS</div>
                    <div className='  pl-2 text-red-500 font-mono text-xl'>DESIGNS THAT INSPIRE, CONNECT,AND LEAVE A LASTING IMPRESSION</div>
                    <div className=' mb-8 pl-2 pt-3 text-white  text-lg text-justify'>Introducing Exmedia Graphic Design, where imagination meets design prowess. Our Graphic studio is a playground for innovative ideas, transforming concepts into visually stunning realities. With a skilled team of designers, we craft graphics that captivate and communicate. From logos to intricate designs, our expertise spans a spectrum of visual elements. We merge artistry with strategy, ensuring each design aligns seamlessly with your brand's essence. At Exmedia, we understand the power of visuals to leave indelible impressions. Step into a world of creativity, where every pixel tells a story. Elevate your brand with Exmedia Graphic Design and make your visual identity a masterpiece.</div>
                    <span className='ml-2 border bg-white text-red-500 font-semibold p-2 cursor-pointer  hover:border-red-500 hover:text-white hover:bg-black hover:rounded-2xl hover:p-3'>READ MORE</span>
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

            <div className=' grid md:flex   bg-black lg:bg-white'>
                <div className='imageZoom text-white w-3/4  p-5'  > <img src={fingers} alt="" />  </div>
                <div className='text-red-600   pt-2 bg-black p-5  w-9/12 '>
                    <div className='  p-2 text-red-500 font-bold text-2xl'>BRANDING</div>
                    <div className='  pl-2 text-red-500 font-mono text-xl'>YOUR BRAND, YOUR STORY : WE SHAPE IDENTITIES WITH IMPACT</div>
                    <div className=' mb-8 pl-2 pt-3 text-white  text-lg text-justify'>Welcome to Exmedia Branding, where identities come to life. Our expertise lies in shaping brands that resonate deeply and endure. With a keen understanding of market dynamics, we craft strategic brand identities that leave lasting imprints. From logos to comprehensive brand strategies, our team blends creativity with market insights to create identities that stand out. We believe in the power of authentic storytelling and meaningful connections. At Exmedia, we architect legacies. Step into a world of brand transformation, where every element speaks volumes, and consider all updated strategies to build and ensure the trust of your brand in the respective community or customer. Choose Exmedia Branding to make your mark and forge enduring relationships with your Valuable customer & audience.</div>
                     <span className='ml-2 border bg-white text-red-500 font-semibold p-2 cursor-pointer hover:border-red-500 hover:text-white hover:bg-black hover:rounded-2xl hover:p-3'>READ MORE</span>
                </div>
            </div>
        </>

    )
}

export default Details;