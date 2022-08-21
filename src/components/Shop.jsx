import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproducttocart } from '../features/cart/cartSlice'
import { selectcategories } from '../features/categories/categoriesSlice'
import { filtername, filterprice, filtrecategory, selectproducts } from '../features/products/productsSlice'

const Shop = () => {

    
    const categories = useSelector(selectcategories)
    const products = useSelector(selectproducts)

    const dispatch = useDispatch()

    const ProductItem = ({ product }) => {
        return (
            <div className="col-sm-4">
               
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={"http://localhost:5000/getfile/" + product.image} alt />
                            <h2>{product.price} DT</h2>
                            <p>{product.name}</p>
                            <a onClick={() => dispatch(addproducttocart({ prod: product }))} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>{product.price} DT</h2>
                                <p>{product.name}</p>
                                <a onClick={() => dispatch(addproducttocart({ prod: product }))} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="left-sidebar">
                        <h2>Category</h2>
                        <div className="panel-group category-products" id="accordian">

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a onClick={() => dispatch(filtrecategory({ id: "all" }))}  >All</a></h4>
                                </div>
                            </div>
                            {
                                categories.map((c, i) => {
                                    return (
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a onClick={()=>dispatch(filtrecategory({id : c._id }))}  >{c.name}</a></h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div class="search_box w-100">
                            <input type="text" onChange={(e) => dispatch(filterprice({ price: e.target.value }))} placeholder="Search by Max Price" />
                        </div>
                       <br></br>
                                <div class="search_box w-100">
                                    <input type="text" onChange={(e) => dispatch(filtername({ text  : e.target.value}))}  placeholder="Search by Name" />
                                </div>
                            
                        <div className="shipping text-center">
                            <img src="images/home/shipping.jpg" alt />
                        </div>
                    </div>

                </div>

                <div className="col-sm-9 padding-right">
                    
                    <div className="features_items">
                    
                        <h2 className="title text-center">Features Items</h2>
                        {
                            products.map((p, i) => {
                                return (

                                    <ProductItem product={p} />
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shop
