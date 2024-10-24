import "./Subscribe.scss"
import sub_img from "../../assets/images/pro1.png"
const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="subscribe_wrapper">
                <div className="sub_wrap">
                    <h3 className="sub_title">Subscribe To Newsletter</h3>
                    <p className="sub_text">Get free guide about smart watches daily. </p>
                    <form action="" className="sub_form">
                        <input className="sub_inp" type="email" required placeholder="Enter Email Address" />
                        <button className="sub_btn">Subscribe</button>
                    </form>
                </div>
                <img className="sub_img" src={sub_img} alt="sub_img" />
            </div>
        </div>
    )
}

export default Subscribe