import './ProductCarousel.css'
import { useState } from "react";
import Slider from "react-slick";
import ProductCard from '../ProductCard/';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import { gql, useQuery } from '@apollo/client'

const QUERY_ALL_WATCHES = gql`
    query GetAllWatches{
        watches(first: 4) {
            id
            brand
            model
            price
            imageUrl
        }
    }
`

const ProductCarousel = () => {

    const { data, loading, error } = useQuery(QUERY_ALL_WATCHES);

    console.log(data)

    if (error) {
        console.log(error)
    }

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
                {data && data.watches.map((watch, i) => (
                    <div className={i === index ? "slide activeSlide" : "slide"}>
                        <ProductCard watch={watch} />
                        {console.log(watch)}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductCarousel