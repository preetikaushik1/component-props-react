

import Breadcrumb from "../Components/Breadcrumb"
import './Pages.scss'


function Contact(){
    return(
        <>
        <div className="contact">
        <Breadcrumb pagename='Contact Me'/>
        <div className=" box-main">
            <div className="box">
              <h1>Address :-</h1>
              <div className="hr">Haryana,India</div>
              <h1>Email :-</h1>
              <div className="hr">preetikaushik10@gmail.com</div>
            </div>
            <div className="box">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563977.441819753!2d73.39667031648943!3d29.269210292384642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x732eaab4aaa6c143!2sHaryana!5e0!3m2!1sen!2sin!4v1685694063187!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
            </div>
        </div>
        </div>
       
        </>
    )
}


export default Contact