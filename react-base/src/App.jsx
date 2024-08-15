import { useState } from "react"
import Banner from "./Banner"
import ContactUs from "./ContactUs"
import Counter from "./Counter"
import GoogleTabs from "./GoogleTabs"
import ProductsList from "./ProductsList"
import ProductsListTwo from "./ProductsListTwo"
import Theme from "./Theme"

export default function App() {
    console.log("app-render")
    const [currentTheme, setCurrentTheme] = useState("dark")
    return (
        <>
            {/*
                <Banner />
                <ProductsList />
                <ContactUs />
                */}

            <div className={`${currentTheme == "dark" ? "dark" : ""}`}>
                <ProductsListTwo />
                <Counter />
                <GoogleTabs />
                <Theme currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
            </div>
        </>
    )
}
