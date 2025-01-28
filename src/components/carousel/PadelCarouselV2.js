import {useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PadelCarousel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 4
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 2
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/hotelRambla/h1.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/merida/m1.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/2.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/5.png")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/6.png")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/7.png")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/8.png")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/hotelRambla/h2.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/hotelRambla/h3.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/hotelRambla/h4.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/hotelRambla/h5.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/merida/m2.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/merida/m3.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/merida/m4.jpg")}
          />
        </div>
      </Carousel>
    </div>
  );
}
