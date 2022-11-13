import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/productDetails.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeaderComponent from "./header/header";
import SubscribeComponent from "./subscribe/subscribe";
import FooterComponent from "./footer/footer";
function ProductDetails(props) {
  const router = useRouter();
  let [quantity, setQuantity] = useState(1);
  let [howpayState, setHowPay] = useState("installment");
  let [bank, setBank] = useState("1");
  let [model, setModel] = useState("1");
  let [color, setColor] = useState("1");
  let [insurance, setInsurance] = useState("1");
  let [currentProduct, setCurrentProduct] = useState();
  let [currentImage, setCurrentImage] = useState('');
  useEffect(() => {
    fetch("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentProduct(
          data.find((product) => product.id == router.query.productDetails)
        );
         setCurrentImage(data.find((product) => product.id == router.query.productDetails)?.img[0])
      });
  }, [router.query.productDetails]);

  function addQ() {
    let number = quantity;
    number++;
    setQuantity(number);
  }
  function minusQ() {
    if (quantity > 0) {
      let number = quantity;
      number--;
      setQuantity(number);
    }
  }

  function howPay(value) {
    setHowPay(value);
  }
  function handleBank(value) {
    setBank(value);
  }
  function handleModel(value) {
    setModel(value);
  }
  function handleColor(value) {
    setColor(value);
  }
  function handleInsurance(value) {
    setInsurance(value);
  }
  function handleCurrentImage(value) {
    setCurrentImage(value);
  }
  return (
    <div>
      <HeaderComponent />
      {currentProduct && (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 currentImageWrapper">
                <div className="images">
                  {currentProduct?.img.map((image, undex) => (
                    <img
                      alt={undex}
                      key={undex}
                      onClick={() => handleCurrentImage(image)}
                      src={image}
                    />
                  ))}
                </div>
                <img className="currentimage" src={currentImage} />
              </div>
              <div className="col-md-4 ">
                <span className="brand">{currentProduct?.name}</span>
                <p className="product_name">{currentProduct?.name}</p>
                <div className="rating d-flex align-items-center">
                  <ReactStars
                    count={5}
                    value={currentProduct?.numberOfStars}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <span className="brand m_10">
                    ({currentProduct?.numberOfReviews} Reviews)
                  </span>
                </div>
                <h3 className="product_price">${currentProduct?.price}</h3>
                {currentProduct?.inStock > 0 && (
                  <span className="availability">instock</span>
                )}
                {currentProduct?.inStock == 0 && (
                  <span className="not_available">out of stock</span>
                )}
                <div className="quntity d-flex align-items-center">
                  <Image
                    alt="add"
                    onClick={addQ}
                    src={require("../public/plus-circle.svg")}
                  />
                  <span> {quantity}</span>
                  <Image
                    onClick={minusQ}
                    alt="minus"
                    src={require("../public/dash-circle.svg")}
                  />
                </div>
                <div className="how_pay">
                  <div
                    onClick={() => howPay("cash")}
                    className={
                      howpayState === "cash"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>Full Price</p>
                  </div>
                  <div
                    onClick={() => howPay("installment")}
                    className={
                      howpayState === "installment"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>Installment</p>
                  </div>
                </div>
                <div className="how_pay mt-2">
                  <div
                    onClick={() => handleBank("1")}
                    className={
                      bank === "1" ? "installment active " : "cash installement"
                    }
                  >
                    <Image
                      alt="cib"
                      src={require("../public/cib.png").default}
                      width={70}
                    />
                  </div>
                  <div
                    onClick={() => handleBank("2")}
                    className={
                      bank === "2" ? "installment active " : "cash installement"
                    }
                  >
                    <Image
                      alt="cib"
                      src={require("../public/cib.png").default}
                      width={70}
                    />
                  </div>
                  <div
                    onClick={() => handleBank("3")}
                    className={
                      bank === "3" ? "installment active " : "cash installement"
                    }
                  >
                    <Image
                      alt="cib"
                      src={require("../public/cib.png").default}
                      width={70}
                    />
                  </div>
                  <div
                    onClick={() => handleBank("4")}
                    className={
                      bank === "4" ? "installment active " : "cash installement"
                    }
                  >
                    <Image
                      alt="cib"
                      src={require("../public/cib.png").default}
                      width={70}
                    />
                  </div>
                </div>
                <p className="font_w_500 m_8">Memory</p>
                <div className="how_pay mt-2">
                  <div
                    onClick={() => handleModel("1")}
                    className={
                      model === "1"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>128GB</p>
                    <p className="font_w_400">$999.00</p>
                  </div>
                  <div
                    onClick={() => handleModel("2")}
                    className={
                      model === "2"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>128GB</p>
                    <p className="font_w_400">$999.00</p>
                  </div>
                  <div
                    onClick={() => handleModel("3")}
                    className={
                      model === "3"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>128GB</p>
                    <p className="font_w_400">$999.00</p>
                  </div>
                  <div
                    onClick={() => handleModel("4")}
                    className={
                      model === "4"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>128GB</p>
                    <p className="font_w_400">$999.00</p>
                  </div>
                </div>
                <p className="font_w_500 m_8">Color</p>
                <div className="how_pay mt-2">
                  <div
                    onClick={() => handleColor("1")}
                    className={
                      color === "1"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>Silver</p>
                    <div className="circle silver"></div>
                  </div>
                  <div
                    onClick={() => handleColor("2")}
                    className={
                      color === "2"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>Sierra Blue</p>
                    <div className="circle blue"></div>
                  </div>
                </div>

                <p className="font_w_500 m_8">Insurance</p>
                <div className="how_pay mt-2">
                  <div
                    onClick={() => handleInsurance("1")}
                    className={
                      insurance === "1"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>1 year</p>
                    <p className="font_w_400">$99.00</p>
                  </div>
                  <div
                    onClick={() => handleInsurance("2")}
                    className={
                      insurance === "2"
                        ? "installment active "
                        : "cash installement"
                    }
                  >
                    <p>2 year</p>
                    <p className="font_w_400">$159.00</p>
                  </div>
                </div>

                <button className="addtocart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}
export default ProductDetails;
