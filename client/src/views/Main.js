import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/findAllProducts/")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            }
            )
            .catch(err => console.log("error" + err))

    }, [loaded])
    console.log(products)

    // const onDeleteHandler = (_id) => {
    //     console.log(_id)
    //     axios.delete(`http://localhost:8000/api/users/${_id}/delete`)
    //         .then(res => {
    //             console.log(res)
    //             setLoaded(false);
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div>

            <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Shop in style</h1>
                        <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>



            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {
                            products.map((item, i) => {
                                return (
                                    <div class="col mb-5">
                                        <div class="card h-100">
                                            <img class="card-img-top" src={item.imageURL1} alt="..." />
                                            <div class="card-body p-4">
                                                <div class="text-center">
                                                    <h5 class="fw-bolder">{item.name}</h5>
                                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                                        <div class="bi-star-fill"></div>
                                                        <div class="bi-star-fill"></div>
                                                        <div class="bi-star-fill"></div>
                                                        <div class="bi-star-fill"></div>
                                                        <div class="bi-star-fill"></div>
                                                    </div>
                                                    {item.price}
                                                </div>
                                            </div>
                                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div class="text-center" style={{ "marginBottom": "5px" }}><a class="btn btn-outline-dark mt-auto" href={`/product/${item._id}`}>View</a></div>
                                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })



                        }





                    </div>



                </div>

            </section>






        </div>

    )
}

export default Main;



// <td><button className="btn btn-danger" onClick={() => onDeleteHandler(item._id)}>Walk the plank</button></td>  --------> Delete button