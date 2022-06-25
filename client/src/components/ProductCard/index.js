import './ProductCard.css'

const ProductCard = ({ watch }) => {
    return (
        <div className='card'>{watch.model}</div>
    )
}

export default ProductCard