import "./Products.scss"
import product1 from "../../assets/images/pro1.png"
import product2 from "../../assets/images/pro2.png"
import product3 from "../../assets/images/pro3.png"
import product4 from "../../assets/images/pro4.png"
import product5 from "../../assets/images/pro5.png"
import product6 from "../../assets/images/pro6.png"
import { FaStar } from "react-icons/fa";
const PRODUCT_CARDS = [
    {
        image: product1,
        brends: "Apple Smart I",
        star: < FaStar />,
        price1: "$300.00",
        price2: "$255.00"
    },
    {
        image: product2,
        brends: "Apple Smart II",
        star: < FaStar />,
        price1: "$300.00",
        price2: "$255.00"
    },
    {
        image: product3,
        brends: "Apple Smart III",
        star: < FaStar />,
        price1: "$300.00",
        price2: "$255.00"
    },
    {
        image: product4,
        brends: "Apple Smart IV",
        star: < FaStar />,
        price1: "$450.00",
        price2: "$399.00"
    },
    {
        image: product5,
        brends: "Samsung Watch Pro",
        star: < FaStar />,
        price1: "$300.00",
        price2: "$255.00"
    },
    {
        image: product6,
        brends: "Fitbit Max 1",
        star: < FaStar />,
        price2: "$155.00"
    }
]
const Products = () => {
    return (
        <div className="products">
            <div className="products_top">
                <p className="products_top_text_one">Find your favourite smart watch.</p>
                <h3 className="products_top_text_two">Our Latest Products</h3>
            </div>
            <div className="products_wrapper">
                {
                    PRODUCT_CARDS?.map((pro_card) => (
                        <div key={pro_card.id} className="product_card">
                            <img className="pro_img" src={pro_card.image} alt="pro_img" />
                            <h2 className="pro_brends">{pro_card.brends}</h2>
                            <div className="star_wrapper">
                                <p className="pro_star">{pro_card.star}</p>
                                <p className="pro_star">{pro_card.star}</p>
                                <p className="pro_star">{pro_card.star}</p>
                                <p className="pro_star">{pro_card.star}</p>
                                <p className="pro_star">{pro_card.star}</p>
                            </div>
                            <div className="price_wrap">
                                <del className="pro_del">{pro_card.price1}</del>
                                <span className="_pro_price">{pro_card.price2}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="view">View More</button>
        </div>
    )
}

export default Products