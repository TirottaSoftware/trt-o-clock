import './Carousel.css'
import { useState } from 'react'
import ProductCard from '../ProductCard'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import { gql, useQuery } from '@apollo/client'

const QUERY_ALL_WATCHES = gql`
    query GetAllWatches{
        watches(first: 3) {
            id
            brand
            model
            price
            imageUrl
        }
    }
`

const Carousel = () => {
    const { data, loading } = useQuery(QUERY_ALL_WATCHES);
    const [activeSlide, setActiveSlide] = useState(1);

    const nextSlide = () => {
        if (activeSlide === 2) {
            setActiveSlide(0)
            return;
        }
        setActiveSlide(activeSlide + 1);
    }

    const prevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(2)
            return;
        }
        setActiveSlide(activeSlide - 1);
    }

    return (
        <>
            {
                loading ? <h1>Loading Data...</h1>
                    :
                    <div className='carousel'>
                        <button onClick={() => prevSlide()} className='arrow-prev'><ChevronLeftIcon /></button>
                        <div className={`item-0 carousel-slide ${activeSlide === 0 && 'active-slide'} ${activeSlide === 1 && 'prev-slide'} ${activeSlide === 2 && 'next-slide'}`}><ProductCard watch={data?.watches[1]} /></div>
                        <div className={`item-1 carousel-slide ${activeSlide === 1 && 'active-slide'} ${activeSlide === 2 && 'prev-slide'} ${activeSlide === 0 && 'next-slide'}`}><ProductCard watch={data?.watches[2]} /></div>
                        <div className={`item-2 carousel-slide ${activeSlide === 2 && 'active-slide'} ${activeSlide === 0 && 'prev-slide'} ${activeSlide === 1 && 'next-slide'}`}><ProductCard watch={data?.watches[0]} /></div>
                        <button onClick={() => nextSlide()} className='arrow-next'><ChevronRightIcon /></button>
                        <div className='progress-bar'>
                            <div className={`dot ${activeSlide === 0 && 'filled'}`}></div>
                            <div className={`dot ${activeSlide === 1 && 'filled'}`}></div>
                            <div className={`dot ${activeSlide === 2 && 'filled'}`}></div>
                        </div>
                    </div>
            }
        </>

    )
}

export default Carousel