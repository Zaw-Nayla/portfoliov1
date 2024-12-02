import { useEffect, useState } from "react";
import { motion} from "framer-motion";

const ImagesCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [direction, setDirection] = useState('left');

  useEffect(()=>{
    return () => {
      setCurrentImage("");
  };
  },[currentIndex]);

  useEffect(() => {
    setCurrentImage(images[currentIndex]);
    const timeout = setTimeout(() => {
        setCurrentImage(images[currentIndex]);
    }, 50);

    return () => clearTimeout(timeout);}, [currentIndex, images]);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      z: "3%",
      opacity: 0,
    },
    hiddenLeft: {
      z: "-3%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className='relative w-full md:w-3/5 flex flex-col items-center'>
        <motion.img className="carousel-images object-contain  h-auto max-h-96"
          key={currentIndex}
          src={currentImage}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          // exit="exit"
        />
      <div className="slide_direction">
        <button className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"  fill="#537FE7" />
          </svg>
        </button>
        <button className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" fill="#537FE7" />
          </svg>
        </button>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );

};

export default ImagesCarousel;