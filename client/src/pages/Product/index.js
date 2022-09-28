import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import './Product.css'
import { useParams } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import SpecCard from '../../components/SpecCard'
import StoreCard from '../../components/StoreCard'
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice"

const QUERY_WATCH = gql`
    query GetWatch($watchId: ID!){
        watch(id: $watchId) {
            id
            brand
            model
            description
            price
            imageUrl
            specs
            features
        }
    }

`

const QUERY_RELATED = gql`
    query GetByBrand($first: Int, $brand: String){
        watches(first: $first, brand: $brand) {
            id
            brand
            model
            description
            price
            imageUrl
            specs
            features
        }
    }
`

function ProductPage() {
    const c = useSelector(addItem);

    const dispatch = useDispatch();

    const { id } = useParams();
    const { data, loading } = useQuery(QUERY_WATCH, {
        variables: { watchId: id }
    });


    const watch = data?.watch;

    const { data: related, loading: loadingRelated } = useQuery(QUERY_RELATED, {
        variables: { first: 3, brand: watch?.brand }
    });

    console.log(related)

    const specs = watch?.specs;
    const features = watch?.features;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {
                loading ? <h1>...</h1> :
                    <>
                        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                        <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />
                        <div className='product-container'>
                            <div className='img-wrapper'>
                                <img src={watch?.imageUrl} alt="Product Image" />
                            </div>
                            <div className='product-body'>
                                <h1><span className='model'>{watch?.model}</span> {watch?.brand}</h1>
                                <div className='product-price'>
                                    <p>${watch?.price}</p>
                                    <button onClick={() => { dispatch(addItem(watch)) }} className='cta cart-cta'>Add To Cart</button>
                                </div>
                                <p className='product-description'>{watch?.description}</p>
                            </div>
                        </div>
                        <div className='specs-section container'>
                            <h2>Specifications</h2>
                            <hr />
                            <div className='specs-container'>
                                {
                                    Object.keys(specs).map(s => {
                                        return <SpecCard key={s} spec={s} value={specs[s]} />
                                    })
                                }
                            </div>
                        </div>
                        <div className='specs-section container'>
                            <h2>Features</h2>
                            <hr />
                            <div className='specs-container'>
                                {
                                    Object.keys(features).map(s => {
                                        return <SpecCard key={s} spec={s} value={features[s]} />
                                    })
                                }
                            </div>
                        </div>
                        <div className='related-section container'>
                            <h2>Related Products</h2>
                            <hr />
                            <div className='related-container'>
                                {related?.watches.map(w => {
                                    return <StoreCard cardStyle={'related'} watch={w} />
                                })}
                            </div>
                        </div>
                        <Footer />
                    </>
            }
        </>
    )
}

export default ProductPage