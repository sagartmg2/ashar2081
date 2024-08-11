export default function Product(props) {
    let product = props.data
    return (
        <div className="product">
            <h2>
                {/* {props.data.name} */}
                {product.name}
                {product.sale ? <span className="sale">sale</span> : ""}
                {product.sale && <span className="sale">sale</span>}
            </h2>
            <p>Rs:{product.price}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, blanditiis at! Eos maieat totam.</p>

            {/* <p>on</p>
            <p>tw</p>
            <a href="">facebook</a>
            <a href="">instagram</a> */}
        </div>
    )
}
