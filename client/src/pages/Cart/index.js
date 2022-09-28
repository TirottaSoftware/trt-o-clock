import "./Cart.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import BillingForm from "../../components/BillingForm"
import PaymentForm from "../../components/PaymentForm"
import CartItem from '../../components/CartItem'
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice"


const Cart = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { cart, isLoading } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    return (
        <div>
            <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />
            <div className="cart-section">
                <div className="cart-container container">
                    <div className="shipping-container">
                        <div className="billing-container">
                            <h2 className="form-heading">Billing Address</h2>
                            <BillingForm />
                        </div>
                        <div className="payment-container">
                            <h2 className="form-heading">Payment Info</h2>
                            <PaymentForm />
                        </div>
                    </div>
                    <div className="cart-items-container">
                        <div className="cart-body">
                            <h2 className="form-heading">Order Summary</h2>
                            <hr />
                            <div className="cart-items">
                                {cart.items?.map(item => {
                                    return <CartItem item={item} removeItem={(id) => { dispatch(removeItem(item.id)); }} />
                                })}
                            </div>
                            <div className="cart-total">
                                <p>Subtotal</p>
                                <p>${cart.total}</p>
                            </div>
                        </div>
                        <button onClick={() => console.log(cart)}>Place Order</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart