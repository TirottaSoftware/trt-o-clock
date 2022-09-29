import "./Store.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StoreCard from '../../components/StoreCard'
import StoreFilter from "../../components/StoreFilter"
import { gql, useQuery } from '@apollo/client'
import { useState } from "react"
import Sidebar from "../../components/Sidebar"

const QUERY_ALL_WATCHES = gql`
    query GetWatchesByBoth($brand: String, $color: Color, $sort: Sort){
        watches(brand: $brand, color: $color, sort: $sort) {
            id
            brand
            model
            price
            imageUrl
            color
        }
    }

`


const Store = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filter, setFilter] = useState({ brand: null, color: null, sort: null });
    const { data, _loading } = useQuery(QUERY_ALL_WATCHES, {
        variables: { brand: filter.brand, color: filter.color, sort: filter.sort }
    });


    const changeFilter = (type, value) => {
        let tempFilter = filter;

        if (value === "ALL") {
            tempFilter[type] = null;
        }
        else {
            tempFilter[type] = value;
        }
        if (type === "sort") {
            switch (value) {
                case "ALPHABETICALLY (A-Z)":
                    tempFilter.sort = { field: "model", order: "ASC" }
                    break;
                case "ALPHABETICALLY (Z-A)":
                    tempFilter.sort = { field: "model", order: "DESC" }
                    break;
                case "PRICE (HIGH TO LOW)":
                    tempFilter.sort = { field: "price", order: "DESC" }
                    break;
                case "PRICE (LOW TO HIGH)":
                    tempFilter.sort = { field: "price", order: "ASC" }
                    break;
                default:
                    tempFilter.sort = {}
                    break;
            }
        }


        setFilter({ ...filter, tempFilter });
    }

    return (
        <div>
            <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />
            <div className="store-hero">
            </div>
            <h1 className="store-hero-text">
                Men's Watches
            </h1>
            <hr />
            <div className="store-container container">
                <div className="filters-container">
                    <StoreFilter type="brand" options={["Seiko", "OMEGA", "Casio", "DanielWellington"]} onChange={changeFilter} />
                    <StoreFilter type="color" options={["Silver", "Black", "Brown", "Beige", "White", "Darkgrey", "Military", "Red"]} onChange={changeFilter} />
                    <StoreFilter type="sort" options={["Alphabetically (A-Z)", "Alphabetically (Z-A)", "Price (High to Low)", "Price (Low to High)"]} onChange={changeFilter} />
                </div>
                <div className="products-container">
                    {
                        data?.watches.length > 0 ? data?.watches.map(watch => {
                            return <StoreCard key={watch.id} watch={watch} />
                        }) : <h2 className="filter-none">There are no items matching these filters.</h2>
                    }
                    <div className="store-filler"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Store