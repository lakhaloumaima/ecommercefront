import React, { useEffect, useState } from 'react'
import { Badge, Button, Tooltip } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createproduct, filtrecategory, getproducts, selectaddstatus, selectdeletestatus, selectproducts } from '../../features/products/productsSlice';
import { getcategories, selectcategories } from '../../features/categories/categoriesSlice'
import ProductItem from './ProductItem';

import { Select, Input } from 'antd';

const { Option } = Select;


const Products = () => {


    const dispatch = useDispatch()

    const categories = useSelector(selectcategories)
    const reduxproducts = useSelector(selectproducts)
    const addstatus = useSelector(selectaddstatus)
    const deletestatus = useSelector(selectdeletestatus)

    useEffect(() => {
        if (addstatus === 'success')
            dispatch(getproducts())
    }, [addstatus]);

    useEffect(() => {
        dispatch(getproducts())

    }, [deletestatus]);

    useEffect(() => {
        dispatch(getcategories())
        dispatch(getproducts())
    }, [])


    const [products, setproducts] = useState(reduxproducts);
    const [displayform, setdisplayform] = useState(false);

    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [qte, setqte] = useState('');
    const [category, setcategory] = useState('');
    const [description, setdescription] = useState('');
    const [file, setfile] = useState(null);

    const handlefile = (e) => {
        setfile(e.target.files[0])
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
        dispatch(filtrecategory({ category: value }))

        if (value === 'all') {
            setproducts(reduxproducts)
        } else {
            let arr = [...reduxproducts]
            let data = arr.filter(p => p.category._id === value)
            setproducts(data)
        }

    }

    const addproduct = () => {
        const data = new FormData()

        data.append('name', name)
        data.append('price', price)
        data.append('qte', qte)
        data.append('category', category)
        data.append('description', description)
        data.append('image', file)

        dispatch(createproduct(data))
        setdisplayform(false)
    }

    return (
        <div className='container'>
            <h2>Products <Badge count={reduxproducts.length} /></h2>

            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <Tooltip title="add">
                    <Button style={{ background: `${displayform ? 'red' : 'blue'}` }} onClick={() => setdisplayform(!displayform)} type="primary" shape="circle" icon={displayform ? <CloseOutlined /> : <PlusOutlined />} />
                </Tooltip>

               
            </div>


            {displayform && <div style={{ marginTop: "20px" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="product name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Price</label>
                    <input value={price} onChange={(e) => setprice(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="price" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                    <input value={qte} onChange={(e) => setqte(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="quantity" />
                </div>
                <select onChange={(e) => setcategory(e.target.value)} style={{ margin: '15px 0' }} class="form-select form-select-lg my-3 mb-3" aria-label=".form-select-lg example">
                    <option selected>shoose category</option>
                    {
                        categories.map((cat, i) => {
                            return (
                                <option value={cat._id}>{cat.name}</option>
                            )
                        })
                    }


                </select>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea value={description} onChange={(e) => setdescription(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Image</label>
                    <input onChange={(e) => handlefile(e)} class="form-control" type="file" id="formFile" />
                </div>
                <Button onClick={() => addproduct()} style={{ background: "#FBB808", outline: "none", border: 'none' }} type="primary">Create</Button>
            </div>}

            <div style={{ marginTop: "15px" }}  >
                {reduxproducts !== undefined &&
                    reduxproducts.map((prod, i) => {
                        return (
                            <ProductItem key={prod._id} product={prod} />
                        )
                    })
                }
            </div>


        </div>
    )

}

export default Products
