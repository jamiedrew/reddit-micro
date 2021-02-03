import './Header.css';

const logo = require("./reddit.png");

function Header() {
    return (
        <div id="header">
            <img src={logo.default} alt=""></img>
            <h1>Reddit<span>Micro</span></h1>
        </div>
        
    )
};

export default Header;