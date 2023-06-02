
import Breadcrumb from "../Components/Breadcrumb"
import profile from "../Assets/image/profile-img.avif" 
import './Pages.scss'

function About(){
    return(
        <>
     
        <div className="about">
        <Breadcrumb pagename='About Page'/>
        <div className="box-main">
            <div className="box">
                <img src={profile} alt='profile' className="img"/>
            </div>
            <div className="box">
                <div className="iam ">"Hello, my name is Preeti. I'm a  frontend developer with 
                a passion for coding. My journey in the world of programming began when I discovered my 
                love for turning ideas into tangible, functional websites. Over the years, I have honed my 
                skills and evolved into a successful full stack developer
I find immense joy in bringing designs to life, creating 
intuitive .
</div>
            </div>
                    </div>
        </div>
      
        </>
    )
}


export default About