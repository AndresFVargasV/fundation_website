// import imagen1 from "../assets/img/imagen2.jpg"; // Ruta de la imagen 1
// import imagen2 from "../assets/img/imagen1.jpg"; // Ruta de la imagen 2
// import imagen3 from "../assets/img/imagen2.jpg"; // Ruta de la imagen 3
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { images } from "../data/images";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map(({ id, description, title }) => {
        return (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={`./assets/img/slider/slide${id}.jpg`}
              alt={title}
            />
            <Carousel.Caption>
              <h3>{title}</h3>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
