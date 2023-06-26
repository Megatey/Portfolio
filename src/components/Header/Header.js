import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="siteName">
        <img
          src="/myphoto.jpg"
          alt="profile pic"
          className="logo-image"
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <ul className="navList">
          <a href="/#Home">
            <li>Home</li>
          </a>
          <a href="/#Profile">
            <li>About</li>
          </a>
          <a href="/#ContactPage">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
