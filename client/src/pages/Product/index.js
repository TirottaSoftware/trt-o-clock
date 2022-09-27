import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import './Product.css'
import { useParams } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import SpecCard from '../../components/SpecCard'

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

function ProductPage() {

    const { id } = useParams();
    const { data, loading } = useQuery(QUERY_WATCH, {
        variables: { watchId: id }
    });


    const watch = data?.watch;
    console.log(watch)
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
                                    <button className='cta cart-cta'>Add To Cart</button>
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
                        <Footer />
                    </>
            }
        </>
    )
}

export default ProductPage