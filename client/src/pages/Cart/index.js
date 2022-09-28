import "./Cart.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import BillingForm from "../../components/BillingForm"
import PaymentForm from "../../components/PaymentForm"


const Cart = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

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
                                {/* Cart Items Go Here */}
                            </div>
                            <div className="cart-total">
                                <p>Subtotal</p>
                                <p>$198.00</p>
                            </div>
                        </div>
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart