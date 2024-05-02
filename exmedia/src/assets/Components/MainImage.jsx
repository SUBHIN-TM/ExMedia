import homeImg from '../Img/Back.jpg'
import logo from '../Img/Logo.png'

const backgroundStyle ={
    backgroundImage:`url(${homeImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '708px'
  }

  const logoStyle ={
    backgroundImage:`url(${logo})`,
    backgroundSize:'cover'
       

  
  }

const MainImage = ()=>{
return(
    <>
    <div className='flex sm:justify-end justify-center items-center sm:items-baseline   sm:pt-0'  style={backgroundStyle}>
     <div className=' w-52 h-52 mb-20 sm:mb-0 ' style={logoStyle}></div>\
    </div>
    </>
   
)
}

export default MainImage;