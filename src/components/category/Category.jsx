import "./Category.scss"
import img1 from "../../assets/images/category_img1.png"
import img2 from "../../assets/images/category_img2.png"
import img3 from "../../assets/images/category_img3.png"
const CATEGORY_CARD = [
    {
        images: img1,
        brends: "Apple",
        title: "Apple is one of the most famous smart watches providing company."
    },
    {
        images: img2,
        brends: "Xiaomi",
        title: "Xiaomi smart watches are produced by MI company."
    },
    {
        images: img3,
        brends: "FitBit",
        title: "FitBit smart watches are best for there health and fitness features."
    }
]
const Category = () => {
    return (
        <div className="category">
            <div className="category_content">
                {
                    CATEGORY_CARD?.map((cards) => (
                        <div className="none_card">
                            <div key={cards.id} className="category_card">
                                <img className="card_img" src={cards.images} alt="card_img" />
                                <div>
                                    <h3 className="brends">{cards.brends}</h3>
                                    <p className="title">{cards.title}</p>
                                </div>
                            </div >
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category