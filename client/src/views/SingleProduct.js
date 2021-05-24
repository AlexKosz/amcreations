import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";


const SingleProduct = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    })

    console.log(product)
    return (
        <div>
            <Link to="/" className="btn btn-info btn-lg">Main Page</Link>
            <h1>Name: {product.name}</h1>
            <h1>Price: {product.price}</h1>
            <h1>Color Options:</h1>
            <h1>Description: {product.description}</h1>
            <h1>Times Purchased: {product.timesPurchased}</h1>
            <h1>Reviews:</h1>
        </div>
    )


}

export default SingleProduct;