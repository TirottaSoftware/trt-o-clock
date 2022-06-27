import './ProductCard.css'

const ProductCard = ({ watch }) => {
    return (
        <div className='card'>
            <img src={watch.imageUrl} alt={`img-${watch.model}`} />
            <h1>{watch.model}</h1>
            <h2>${watch.price}</h2>
            <button className="btn-cta">View</button>
        </div>
    )
}

export default ProductCard