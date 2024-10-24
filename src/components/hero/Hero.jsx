import "./Hero.scss"
import hero_img from "../../assets/images/hero_img.png"
import { IoIosSearch } from "react-icons/io";
const Hero = () => {
    return (
        <div className="hero_bg">
            <div className="hero">
                <div className="hero_left_content">
                    <h2 className="hero_title">Discover Most Suitable Watches</h2>
                    <p className="hero_text">Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                    <form action="" className="hero_form">
                        <IoIosSearch className="hero_search" />
                        <input className="hero_inp" type="search" placeholder="Find the best brands" required />
                        <button className="hero_btn">Search</button>
                    </form>
                </div>
                <img className="hero_img" src={hero_img} alt="hero_img" />
            </div>
        </div>
    )
}

export default Hero