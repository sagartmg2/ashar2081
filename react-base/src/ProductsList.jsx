function ProductsList() {
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

    /* TODO: filter out featuredProducts and normal products.  not directly like i have done below  */
    let featuredProducts = [
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
    ]

    let noramlProducts = [
        {
            name: "watch",
            price: 1000,
        },
        {
            name: "watch -1",
            price: 1000,
        },
        {
            name: "watch - 4 ",
            price: 1000,
        },
    ]

    return (
        <div>
            <h1>featured products List</h1>
            <div className="products-list">
                {featuredProducts.map((product) => {
                    return (
                        <div className="product">
                            <h2>{product.name} </h2>
                            <p>Rs:{product.price}</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, blanditiis at! Eos
                                maieat totam.
                            </p>
                        </div>
                    )
                })}
            </div>
            <h1> Normal products List</h1>
            <div className="products-list">
                {noramlProducts.map((product) => {
                    return (
                        <div className="product">
                            <h2>{product.name}</h2>
                            <p>Rs:{product.price}</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, blanditiis at! Eos
                                maieat totam.
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsList
