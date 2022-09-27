import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import './Product.css'
import { useParams } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const QUERY_WATCH = gql`
    query GetWatch($watchId: ID!){
        watch(id: $watchId) {
            id
            brand
            model
            description
            price
            imageUrl
        }
    }

`

function ProductPage() {

    const { id } = useParams();
    const { data, loading } = useQuery(QUERY_WATCH, {
        variables: { watchId: id }
    });

    const watch = data?.watch;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />
            <div className='product-container'>
                <div className='img-wrapper'>
                    <img src={watch?.imageUrl} alt="Product Image" />
                </div>
                <div className='product-body'>
                    <h1><span className='brand'>{watch?.brand}</span> {watch?.model}</h1>
                    <div className='product-price'>
                        <p>${watch?.price}</p>
                        <button className='cta cart-cta'>Add To Cart</button>
                    </div>
                    <p className='product-description'>{watch?.description}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage