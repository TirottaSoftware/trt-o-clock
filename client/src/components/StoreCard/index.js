import { Link } from 'react-router-dom'
import './StoreCard.css'

const StoreCard = ({ watch }) => {
    return (
        <div className='store-card'>
            <div className='img-wrapper'>
                <Link className='nav-link' to={`/product/${watch.id}`}>
                    <img src={watch.imageUrl} alt='productImage' />
                </Link>
            </div>
            <div className='card-body'>
                <h1>{watch.model}</h1>

                <Link className='nav-link' to={`/product/${watch.id}`}>
                    <button>${watch.price}</button>
                </Link>
            </div>
        </div>
    )
}

export default StoreCard