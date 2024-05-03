import para from '../Img/1.jpg'
const Details = () => {

    return (
        <>
            <div className="parallax" style={{
                backgroundImage: `url(${para})`,
                height: '500px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </div>
            <div className='innerPara'>
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>
            <div className="parallax" style={{
                backgroundImage: `url(${para})`,
                height: '500px',
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