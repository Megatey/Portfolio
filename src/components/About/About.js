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
                    <div className="extra">
                        <h3 className="title">Personal Info</h3>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>
                                        <span>Name: </span>
                                        Tijani Ibrahim
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Age: </span>
                                        24 Years Old
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Nationality: </span>
                                        Nigerian
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Freelance: </span>
                                        Available
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="skills">Skills: </span>
                                        HTML, CSS, Javascript, ReactJs
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="experience">Experience: </span>
                                        2 years
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>
                                        <span>Phone: </span>
                                        +2349024343853
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Email: </span>
                                        megatey97@gmail.com
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Language: </span>
                                        English
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
