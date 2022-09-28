import "./Cart.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from "react"
import Sidebar from "../../components/Sidebar"


const Cart = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />

            <Footer />
        </div>
    )
}

export default Cart