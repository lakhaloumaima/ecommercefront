import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteptroductsfromcart, resetcart, selectcart } from '../features/cart/cartSlice'
import { createorder, selectaddorderstatus } from '../features/orders/ordersSlice'
import { selectautheduser, selectisauth } from '../features/users/usersSlice'
import { message } from 'antd'


const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector(selectcart)

    const isauth = useSelector(selectisauth)

    const user = useSelector(selectautheduser)

    const [total, settotal] = useState(0);

    const addorderstatus = useSelector(selectaddorderstatus)


    const success = () => {
        message.success('order successfuly sent');
    };

    const Total = () => {

        let sum = 0

        for (let item of cart) {
            sum += item.price
            /* sum = sum + item.price */
        }

        settotal(sum)
        return (
            <li>Total <span>{sum} DT</span></li>
        )
    }

    const getproductstable = () => {
        let arr = []
        for (let item of cart) {
            arr.push(item._id)
        }
        return arr
    }

    const order = () => {

        const data = {
            client: user._id,
            total_price: total,
            products: getproductstable()
        }

        dispatch(createorder(data))
        //success()
        dispatch(resetcart())
        window.location.href = '/ordersuccess'
       
    }

    return (
        <div>
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description" />
                                    <td className="price">Price</td>
                                    <td className="total">Total</td>
                                    <td />
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    cart.map((p, i) => {
                                        return (
                                            <tr>
                                                <td className="cart_product">
                                                    <a href><img style={{ height: "100px", width: "100px" }} src={"http://localhost:5000/getfile/" + p.image} alt /></a>
                                                </td>
                                                <td className="cart_description">
                                                    <h4><a href>{p.name}</a></h4>
                                                    <p>{p.description}</p>
                                                </td>
                                                <td className="cart_price">
                                                    <p>{p.price} DT</p>
                                                </td>

                                                <td className="cart_delete">
                                                    <a className="cart_quantity_delete" onClick={() => dispatch(deleteptroductsfromcart({ idp: p._id }))} ><i className="fa fa-times" /></a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="do_action">
                <div className="container">
                    <div className="heading">
                        
                         </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="total_area">
                                <ul>
                                    <li>Products <span>{cart.length}</span></li>
                                    <Total />
                                </ul>
                                {isauth && user && user.__t === 'client' && <a onClick={() => order()} className="btn btn-default update" >Order naw</a>}
                                {!isauth && <a href='/login' className="btn btn-default update" >Login to order</a>}
                                <a className="btn btn-default check_out" href='/shop'>Continue shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
