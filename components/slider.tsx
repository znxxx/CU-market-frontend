'use client'
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

function Slider() {
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);
  
    const scrollCarousel = (targetImageNumber) => {
      const carouselWidth = carouselRef.current.clientWidth;
      const targetImage = targetImageNumber - 1;
      const targetXPixel = carouselWidth * targetImage;
  
      carouselRef.current.scrollTo({
        left: targetXPixel,
        behavior: 'auto', // You can change this to 'smooth' for smoother scrolling
      });
  
      setCurrentSlide(targetImageNumber);
    };
  
    useEffect(() => {
      const totalSlides = 4; // Change this to the total number of slides
      let interval: string | number | NodeJS.Timeout | undefined;
  
      const autoScroll = () => {
        if (currentSlide < totalSlides) {
          scrollCarousel(currentSlide + 1);
        } else {
          scrollCarousel(1);
        }
      };
  
      interval = setInterval(autoScroll, 3000); // Adjust the interval in milliseconds
  
      return () => {
        clearInterval(interval);
      };
    }, [currentSlide]);
  
    return (
      <>
        <div className="carousel w-full" ref={carouselRef}>
          <div className="carousel-item relative w-full">
            <Image
              src="/images/Rectangle 23.png"
              className="w-full"
              alt="eiei"
              width={1440}
              height={458}
            />
          </div>
          <div className="carousel-item relative w-full">
            <Image
              src="/images/Rectangle 23.png"
              className="w-full"
              alt="eiei"
              width={1440}
              height={458}
            />
          </div>
          <div className="carousel-item relative w-full">
            <Image
              src="/images/Rectangle 23.png"
              className="w-full"
              alt="eiei"
              width={1440}
              height={458}
            />
          </div>
          <div className="carousel-item relative w-full">
            <Image
              src="/images/Rectangle 23.png"
              className="w-full"
              alt="eiei"
              width={1440}
              height={458}
            />
          </div>
        </div>
  
        <div className="flex justify-center w-full py-2 gap-2">
          <button onClick={() => scrollCarousel(1)} className="btn btn-xs">
            1
          </button>
          <button onClick={() => scrollCarousel(2)} className="btn btn-xs">
            2
          </button>
          <button onClick={() => scrollCarousel(3)} className="btn btn-xs">
            3
          </button>
          <button onClick={() => scrollCarousel(4)} className="btn btn-xs">
            4
          </button>
        </div>
      </>
    );
  }
  
  export default Slider;
  