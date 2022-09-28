function CartItem({ item }) {
    return (
        <div className='cart-item'>
            <div className='img-wrapper'>
                <img src={item.imageUrl} alt="Cart Item Image" />
            </div>
            <div className='item-info'>
                <h6>{item.brand}</h6>
                <h3>{item.model}</h3>
            </div>
            <div className='item-price'>
                <p>{item.price}</p>
                <button>O</button>
            </div>
        </div>
    )
}

export default CartItem