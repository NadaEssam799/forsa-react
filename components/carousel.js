import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import classes from "../styles/carouse.module.css";

function CarouselComponent(props) {
  const router = useRouter();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  function navigateTo(product) {
    router.push(product);
  }
  return (
    <div>
      <div className="desktop">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {props.products.map((product, index) => (
            <SwiperSlide key={index} onClick={() => navigateTo(product.id)}>
              <div
                key={product.id}
                className={
                  index === 0
                    ? "item itemfirst"
                    : "item " + index === props.products.length - 1
                    ? "item itemlast"
                    : "item"
                }
              >
                <img
                  width={100}
                  className="d-flex algin-items-center justify-content-center m-auto"
                  src={product.img[0]}
                />
                <p className={classes.product_name}>{product.name}</p>
                <p className={classes.product_price}>{product.price}$</p>

                {product.inStock > 0 && (
                  <span className={classes.availability}>instock</span>
                )}

                {product.inStock == 0 && (
                  <span className={classes.not_available}>out of stock</span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mobile">
        <div className="row">
          {props.products.map((product, index) => (
            <div key={index} className="col-md-6" onClick={() => navigateTo(product.id)}>
              <div
                key={product.id}
                className={
                  index === 0
                    ? "item itemfirst"
                    : "item " + index === props.products.length - 1
                    ? "item itemlast"
                    : "item"
                }
              >
                <img
                  width={100}
                  className="d-flex algin-items-center justify-content-center m-auto"
                  src={product.img[0]}
                />
                <p className={classes.product_name}>{product.name}</p>
                <p className={classes.product_price}>{product.price}$</p>

                {product.inStock > 0 && (
                  <span className={classes.availability}>instock</span>
                )}

                {product.inStock == 0 && (
                  <span className={classes.not_available}>out of stock</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
