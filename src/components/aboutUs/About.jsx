import "./About.scss"
import { FaStar } from "react-icons/fa";
import about_img1 from "../../assets/images/a1.png"
import about_img2 from "../../assets/images/a2.png"
const About = () => {
    return (
        <div className="about">
            <p className="about_item">Here are our some of the best clients.</p>
            <h3 className="about_title">What People Say About Us</h3>
            <div className="about_card_content">
                <div className="about_card">
                    <img className="about_img" src={about_img1} alt="about_img" />
                    <div className="about_right">
                        <p className="about_rigt_text1">Hamza Faizi</p>
                        <p className="about_rigt_text2">Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <div className="about_star_con">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>

                <div className="about_card">
                    <img className="about_img" src={about_img2} alt="about_img" />
                    <div className="about_right">
                        <p className="about_rigt_text1">Hafiz Huzaifa</p>
                        <p className="about_rigt_text2">I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                        <div className="about_star_con">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About