import Banner from "./Banner"
import ContactUs from "./ContactUs"
import Counter from "./Counter"
import ProductsList from "./ProductsList"
import ProductsListTwo from "./ProductsListTwo"

export default function App() {
    console.log("app-render");

    return (
        <>
            {/*
             <Banner />
            <ProductsList />
            <ProductsListTwo/>
            <ContactUs />
             */}
            <Counter/>
        </>
    )
}
