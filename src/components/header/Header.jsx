import "./Header.scss"
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/images/Logo.svg"
const NAVBAR_LIST = ["Home", "Brands", "Recent Products", "Contact", "About"]
const Header = () => {
    return (
        <header className="header_bg">
            <div className="header">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <nav>
                    <ul className="navbar">
                        {
                            NAVBAR_LIST?.map((list) => (
                                <li key={list.id} className="nav_item">
                                    <a href="#">
                                        <span>{list}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="icons_content">
                    <IoIosSearch className="header_icons" />
                    <FaUser className="header_icons" />
                    <BsFillCartFill className="header_icons" />
                </div>
                <IoMenu className="sidebar" />
            </div>
        </header>
    )
}

export default Header