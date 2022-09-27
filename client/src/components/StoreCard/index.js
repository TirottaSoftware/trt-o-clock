import './StoreCard.css'

const StoreCard = ({ watch }) => {
    return (
        <div className='store-card'>
            <div className='img-wrapper'>
                <img src={watch.imageUrl} alt='productImage' />
            </div>
            <div className='card-body'>
                <h1>{watch.model}</h1>
                <button>${watch.price}</button>
            </div>
        </div>
    )
}

export default StoreCard