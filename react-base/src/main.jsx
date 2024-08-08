import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"

let title = "Proudcts List"

let products = [
    {
        featured: true,
        title: "watch",
        oldPrice: 1200,
        price: 1000,
        description: "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
    },
    {
        featured: false,
        title: "mouse",
        oldPrice: 11200,
        price: 11000,
        description: "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
    },
    {
        featured: false,
        title: "kewyord",
        oldPrice: 1300,
        price: 100,
        description: "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
    },
]

/* component in react */
function Product(props) {
    // console.log("props",props)
    return (
        <div className="product">
            <h2>{props.title}</h2>
            <p>
                <span className="old-price">Rs:{props.oldPrice}</span> Rs:{props.price}
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis, fugit nostrum
                ducimus repellat minima at, sapiente corrupti quia? Non fuga perferendis maiores nemo, accusantium illo?
                Quas, nostrum.
            </p>
        </div>
    )
}

function Card(props) {
    return (
        <div className="product">
            <h2>{props.product.title}</h2>
            <p>
                <span className="old-price">Rs:{props.product.oldPrice}</span> Rs:{props.product.price}
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis, fugit nostrum
                ducimus repellat minima at, sapiente corrupti quia? Non fuga perferendis maiores nemo, accusantium illo?
                Quas, nostrum.
            </p>
        </div>
    )
}

// Product("wtch",1200,1000,"alorem ispusm........")

/* 

    research on 
    .map
    .filter
    conditional rendering // if else in react
    
*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div id="products-list" className="product-list">
            <h1>Featrued products</h1>
            <hr />
            <Product
                title={products[0].title}
                oldPrice={products[0].oldPrice}
                price={products[0].price}
                description="loream ipsum..."
            />
            <Product
                title={products[1].title}
                oldPrice={products[1].oldPrice}
                price={products[1].price}
                description="loream ipsum..."
            />
            <Product
                title={products[2].title}
                oldPrice={products[2].oldPrice}
                price={products[2].price}
                description="loream ipsum..."
            />

            {/* 

                    {
                        [ <Card product={products[0]} />, <Card product={products[1]} />, <Card product={products[1]} />]
                    }
            */}

            {products.map((el) => {
                return <Card product={el} />
            })}


            <h1>Normal Producs</h1>

            {/* <Product title="skeybord" oldPrice="700" price="500" description="loream ipsum..." />
            <Product title="smouse" oldPrice="1700" price="1500" description="loream ipsum..." />
            <Product title="swatch 10" oldPrice="1700" price="1500" description="loream ipsum..." />
            <Product title="smobile" oldPrice="1700" price="15000" description="loream ipsum..." /> */}
        </div>
    </React.StrictMode>
)
