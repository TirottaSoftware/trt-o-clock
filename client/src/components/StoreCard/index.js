import { Link } from 'react-router-dom'
import './StoreCard.css'
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

                <button onClick={() => { dispatch(addItem(watch)); toast.success("Item added to cart", { toastId: "cart1" }) }}>${watch.price}</button>

            </div>
        </div>
    )
}

export default StoreCard