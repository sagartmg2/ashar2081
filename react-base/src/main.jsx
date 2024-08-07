import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"

let title = "Proudcts List"

let products = [
  {
    title:"watch",
    oldPrice:1200,
    newPrice:1000,
    description:"em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis," 
  },
  {
    title:"mouse",
    oldPrice:11200,
    newPrice:11000,
    description:"em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis," 
  },
  {
    title:"kewyord",
    oldPrice:1300,
    newPrice:100,
    description:"em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis," 
  },
]

/* component in react */

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div>
            <h1>{title}</h1>
            <hr />
            <div className="product">
                <h2>Watch</h2>
                <p><span className="old-price">Rs:12000</span> Rs:1000</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis, fugit
                    nostrum ducimus repellat minima at, sapiente corrupti quia? Non fuga perferendis maiores nemo,
                    accusantium illo? Quas, nostrum.
                </p>
            </div>
            <div className="product">
                <h2>Keyboard</h2>
                <p>Rs:1000</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis, fugit
                    nostrum ducimus repellat minima at, sapiente corrupti quia? Non fuga perferendis maiores nemo,
                    accusantium illo? Quas, nostrum.
                </p>
            </div>
            <div className="product">
                <h2>Mouse</h2>
                <p>Rs:1000</p>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis, fugit
                    nostrum ducimus repellat minima at, sapiente corrupti quia? Non fuga perferendis maiores nemo,
                    accusantium illo? Quas, nostrum.
                </p>
            </div>
            <div className="product">
                <h2>Mobile</h2>
                <p>Rs:1000</p>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis, fugit
                    nostrum ducimus repellat minima at, sapiente corrupti quia? Non fuga perferendis maiores nemo,
                    accusantium illo? Quas, nostrum.
                </p>
            </div>
        </div>
    </React.StrictMode>
)
