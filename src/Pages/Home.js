import laptopimg from "../Assets/image/laptopimg.jpg"
import './Pages.scss'
function Home(){
    return(
        <>
        <div className="home">

         <div className='hlo'>Preeti Kaushik</div>
         <div className='my-text'>I create meaningful solutions for your brands and products. Give your customers the best experience possible.
</div>
<div className="img-box">
    <img src={laptopimg} className="laptopimg" alt="laptop"/>
</div>

        </div>
        </>
    )
}


export default Home