import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="siteName">
                <img src="/myphoto.jpg" alt="profile pic" className="logo-image" />
            </div>
            <ul className="navList">
               <a href="/#Home"><li>Home</li></a>
                <a href="/#Profile"><li>About</li></a>
                <a href="/#ContactPage"><li>Contact</li></a>
            </ul>
        </div>
    )
}

export default Header
