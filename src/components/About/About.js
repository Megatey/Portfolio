import './About.css'
const About = () => {
    return (
        <div className="AboutPage">
            <div className="AboutText">
                <span>
                    About me
                </span>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa.</p>
            </div>
            <div className="myInfo">
                <div className="myImage"></div>
                <div className="InfoText">
                    <h3>I'm Tijani Ibrahim</h3>
                    <h5>A <span>Web developer</span> based in <span>Nigeria</span></h5>
                    <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
                    <div className="extra"></div>
                </div>
            </div>
        </div>
    )
}

export default About
