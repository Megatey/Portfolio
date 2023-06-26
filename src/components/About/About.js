import './About.css'
const About = () => {
    return (
        <div className="AboutPage" id="Profile">
            <div className="AboutText">
                <span>
                    About me
                </span>
                <h1>About Me</h1>
                <p>I'm a front-end Web developer, who is specialize at creating a good quality responsive websites for user friendly experiences.</p>
            </div>
            <div className="myInfo">
                <div className="myImage">
                    <img src="./myphoto.jpg" alt="dp" width="100%" height="100%" className='mydp' />
                </div>
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
                                        26 Years Old
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
                                        MERN
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="experience">Experience: </span>
                                        4 years
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
