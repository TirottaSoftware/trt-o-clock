import './ProductCarousel.css'
import { useState } from "react";
import Slider from "react-slick";
import ProductCard from '../ProductCard/';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'

const cards = [
    {
        title: "Card One"
    },
    {
        title: "Card Two"
    },
    {
        title: "Card Three"
    },
    {
        title: "Card Four"
    }
]

const ProductCarousel = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <ChevronRightIcon />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <ChevronLeftIcon />
            </div>
        );
    };

    const [index, setIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (_, next) => setIndex(next),
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {cards.map((card, i) => (
                    <div className={i === index ? "slide activeSlide" : "slide"}>
                        <ProductCard title={card.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductCarousel