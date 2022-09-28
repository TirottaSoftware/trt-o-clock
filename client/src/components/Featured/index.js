import './Featured.css'
import showcased from '../../assets/dw-showcased.png'
import dwLook from '../../assets/dw-look.jpg'
import dwLogo from '../../assets/daniel-wellington-logo.png';
import { gql, useQuery } from '@apollo/client'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice"

const QUERY_SHOWCASED = gql`
  query GetWatch($watchId: ID!){
    watch(id: $watchId) {
      id
      brand
      imageUrl
      price
      model
      specs
      description
  }
}
`
const Featured = () => {

    const c = useSelector(addItem);

    const dispatch = useDispatch();
    const { data, loading } = useQuery(QUERY_SHOWCASED, { variables: { watchId: 20 } });
    return (
        <>
            {
                loading ? <label className='label-loading'>Fetching data...</label> :
                    <div className='featured-container'>
                        <img src={showcased} alt='' />
                        <div className='specs'>
                            <h1>{data.watch.model}</h1>
                            <h2>By {data.watch.brand}</h2>
                            <div className='specs-table'>
                                {Object.keys(data.watch.specs).map((key, index) => {
                                    return <div className='specs-row'>
                                        <label>{key}</label>
                                        <label>{data.watch.specs[key]}</label>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='description'>
                            <img src={dwLogo} alt='' />
                            <p>{data.watch.description}</p>
                            <Link className='btn-cta bg-beige' to='/product/20'>
                                <button className='btn-cta'>Go To Product</button>
                            </Link>
                            <button onClick={() => { dispatch(addItem(data.watch)); toast.success("Item added to cart", { toastId: "cart1" }) }} className='btn-cta'>Add To Cart</button>
                        </div>
                        <img src={dwLook} alt='' />
                    </div>
            }
        </>
    )
}

export default Featured