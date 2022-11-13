import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function SliderComponent(props) {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      selectedItem={3}
      showThumbs={false}
      stopOnHover={false}
    >
      {props.slides.map((slide) => (
        <div key={slide.id}>
          <img src={slide.img} />
        </div>
      ))}
    </Carousel>
  );
}
export default SliderComponent;
