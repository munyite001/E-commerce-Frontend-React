/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Slider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToPrevious() {
        currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(currentIndex - 1);
    }

    function goToNext() {
        currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    const autoPlay = () => {
        goToNext(currentIndex);
    }

    useEffect(() => {
        const interval = setInterval(autoPlay, 10000);
        return () => clearInterval(interval);
    })

    return (
        <div className="sliderContainer">
            <img src={slides[currentIndex].url} alt="slider image" />
            <p className="image-text">
                {slides[currentIndex].text}
            </p>
            <div className="leftArrow arrow" onClick={goToPrevious}>
                <i className='bx bxs-chevron-left'></i>
            </div>
            <div className="rightArrow arrow" onClick={goToNext}>
                <i className='bx bxs-chevron-right'></i>
            </div>
        </div>
    )
}

Slider.PropTypes = {
    slides: PropTypes.array,
}