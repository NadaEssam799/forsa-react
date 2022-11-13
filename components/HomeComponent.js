import SliderComponent from "./slider";
import { useState, useEffect } from "react";
import CarouselComponent from "./carousel";
import ProductDetails from "./productDetails";
import FooterComponent from "./footer/footer";
import HeaderComponent from "./header/header";
import SubscribeComponent from "./subscribe/subscribe";
function HomeComponent(props) {
  const [slidesResponse, setslidesResponse] = useState([]);
  const [productsResponse, setproductsResponse] = useState([]);

  useEffect(() => {
    fetch("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setslidesResponse(data);
      });
    fetch("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setproductsResponse(data);
      });
  }, []);

  return (
    <div>
      <title>Forsa</title>
      {/* <ProductDetails /> */}
      <HeaderComponent/>
      <SliderComponent slides={slidesResponse} />
      <div className="container mb">
        <p className="explore_products">Explore Products</p>
        <CarouselComponent products={productsResponse} />
      </div>

      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default HomeComponent;
