import "./Store.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Store = () => {
    return (
        <div>
            <Navbar />
            <div className="store-hero">
            </div>
            <h1 className="store-hero-text">
                Men's Watches
            </h1>
            <Footer />
        </div>
    )
}

export default Store