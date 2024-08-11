import Product from "./components/Product"

export default function ProductsListTwo() {
    let products = [
        {
            name: "watch",
            price: 1000,
            sale: true,
        },
        {
            name: "watch -1",
            price: 1000,
        },
        {
            featured: true,
            name: "watch -2",
            price: 1000,
        },
        {
            featured: true,
            name: "watch - 3 ",
            price: 1000,
        },
        {
            name: "watch - 4 ",
            price: 1000,
            sale: true,
        },
    ]

    /* let featuredProducts = products.filter((el) => {
        if (el.featured) {
            return true
        }
    }) */
    let featuredProducts = products.filter((el) => el.featured)

    // let noramlProducts = products.filter((el) => {
    //     if (!el.featured) {
    //         return true
    //     }
    // })

    let noramlProducts = products.filter((el) => !el.featured)

    return (
        <div>
            <h1>featured products List</h1>
            <div className="products-list">
                {/* {featuredProducts.map((product) => {
                    return <Product data={product} />
                })} */}
                {/* {
                    products.map(el =>{
                        if(el.featured){
                            return <Product data={el}/>
                        }
                        
                    })
                } */}
                {products
                    .filter((el) => el.featured)
                    .map((el) => {
                        return <Product data={el} />
                    })}
            </div>

            <h1> Normal products List</h1>
            <div className="products-list">
                {noramlProducts.map((product) => {
                    return <Product data={product} />
                })}
            </div>
        </div>
    )
}
