import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ watch }) => {
    return (
        <div className='card'>
            <img src={watch.imageUrl} alt={`img-${watch.model}`} />
            <h1>{watch.model}</h1>
            <h2>${watch.price}</h2>
            <Link className="product-cta" to={`/product/${watch.id}`}>
                <button className="btn-cta">View</button>
            </Link>
        </div>
    )
}

export default ProductCard