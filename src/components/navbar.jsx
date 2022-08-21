import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectcart } from '../features/cart/cartSlice'
import { filtername } from '../features/products/productsSlice'
import { logout, selectautheduser, selectisauth } from '../features/users/usersSlice'

const Navbar = () => {

    const isauth = useSelector(selectisauth)

    const user = useSelector(selectautheduser)
    const cart = useSelector(selectcart)

    const dispatch = useDispatch()

    const PrivateNavItemByRole = ({ url, text, roles }) => {
        if (isauth && roles.includes(user.__t)) {
            return <li><a href={url} >{text}</a></li>
        } else {
            return null
        }
    }

    return (
        <div>
            <header id="header">
                <div class="header_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="contactinfo">
                                    <ul class="nav nav-pills">
                                        <li><a href="#"><i class="fa fa-phone"></i> +216 24 540 686</a></li>
                                        <li><a href="#"><i class="fa fa-envelope"></i> lakhalouma6@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="social-icons pull-right">
                                    <ul class="nav navbar-nav">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 clearfix">
                                <div class="logo pull-left">
                                    <a href="/home"><img src="images/home/logo.png" alt="" /></a>
                                </div>

                            </div>
                            <div class="col-md-8 clearfix">
                                <div class="shop-menu clearfix pull-right">
                                    <ul class="nav navbar-nav">
                                        {isauth && <li><a href="/profile"><i class="fa fa-user"></i> Account</a></li>}
                                        { <li><a href="/contact"><i class="glyphicon glyphicon-envelope"></i>Contact </a></li>}
                                        {<li><a href="/cart"><i class="fa fa-shopping-cart"></i> Cart </a></li>}
                                        {!isauth && <li><a href="/login"><i class="fa fa-lock"></i> Login</a></li>}
                                       
                                        {!isauth && <li><a href="/register"><i class=" glyphicon glyphicon-registration-mark"></i> Register</a></li>}
                                        {isauth && <li onClick={() => dispatch(logout())} ><a><i class="fa fa-lock"></i> logout</a></li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <div class="mainmenu pull-left">
                                    <ul class="nav navbar-nav collapse navbar-collapse">
                                    
                                    { <li><a href="/shop" class="">Home</a></li>}
                                    
                                        <PrivateNavItemByRole url='/categories' text='Categories' roles={["admin"]} />
                                        <PrivateNavItemByRole url='/products' text='Products' roles={["admin"]} />
                                        <PrivateNavItemByRole url='/users' text='Users' roles={["admin"]} />
                                        <PrivateNavItemByRole url='/orders' text='Orders' roles={["admin"]} />
                                        <PrivateNavItemByRole url='/clientorders' text='Orders' roles={["client"]} />
                                    </ul>
                                </div>
                            </div>
                            

                            
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Navbar

// imr
//sfc