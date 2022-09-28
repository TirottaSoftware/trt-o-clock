import { Link } from 'react-router-dom'
import './StoreCard.css'
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice"

const StoreCard = ({ watch, cardStyle }) => {
    const c = useSelector(addItem);

    const dispatch = useDispatch();

    return (
        <div className={`store-card ${cardStyle === "related" ? "related-card" : ""}`}>
            <div className='img-wrapper'>
                <Link className='nav-link' to={`/product/${watch.id}`}>
                    <img src={watch.imageUrl} alt='productImage' />
                </Link>
            </div>
            <div className='card-body'>
                <h1>{watch.model}</h1>

                <Link className='nav-link' to={`/product/${watch.id}`}>
                    <button onClick={() => { dispatch(addItem(watch)) }}>${watch.price}</button>
                </Link>
            </div>
        </div>
    )
}

export default StoreCard