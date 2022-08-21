import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'
import { CameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduct, updateproduct, updateproductimage } from '../../features/products/productsSlice';
import { Form, Input, Button, Checkbox } from 'antd';
import { selectcategories } from '../../features/categories/categoriesSlice';
import { Select } from 'antd';

const { Option } = Select;

const ProductItem = ({ product }) => {

    const categories = useSelector(selectcategories)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            id : product._id,
            data : values
        }


        dispatch(updateproduct(data))
        setIsModalVisible(false)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handlefilechanged = (e) => {
        let fdt = new FormData()

        fdt.append('image', e.target.files[0])

        let data = {
            id: product._id,
            data: fdt
        }

        dispatch(updateproductimage(data))
        window.location.reload()
    }

    return (
        <div>
            <div class="col-sm-4">
                <div class="product-image-wrapper">
                    <div class="single-products">
                        <div class="productinfo text-center">
                            <img src={'http://localhost:5000/getfile/' + product.image} alt="" />
                            <h2> {product.price} DT</h2>
                            <p>{product.name}</p>
                        </div>
                        <div class="product-overlay">
                            <div class="overlay-content">
                                <h2>{product.price} DT</h2>
                                <p>{product.name}</p>
                            </div>
                        </div>
                    </div>
                    <div class="choose">
                        <ul class="nav nav-pills nav-justified">
                            <li><a onClick={() => showModal()} ><i class="glyphicon glyphicon-pencil"></i>Update</a></li>
              
                            <li><a onClick={() => dispatch(deleteproduct(product._id))}  ><i class="glyphicon glyphicon-trash"></i>Delete</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <Modal footer={null}  title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img src={'http://localhost:5000/getfile/' + product.image} alt="" style={{ width: "100%", height: "200px" }} />
                <div style={{ dispaly: "flex", justifyContent: 'center' }} >
                    <input type="file" id='upload' hidden onChange={(e) => handlefilechanged(e)} />
                    <CameraOutlined onClick={() => document.getElementById('upload').click()} style={{ marginLeft: "50%", fontSize: "25px", color: "orange", cursor: 'pointer' }} />
                </div>

                <Form
                    
                    initialValues={{ 

                        name: product.name,
                        price: product.price,
                        qte: product.qte,
                        description: product.description,
                        category: product.category._id

                     }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout={"vertical"}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input product name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input product price!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="quantity"
                        name="qte"
                        rules={[{ required: true, message: 'Please input product quantity!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input product description!' }]}
                    >
                        <Input />
                    </Form.Item>

                    {<Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: 'Please select product category!' }]}
                    >
                        <Select  >
                            {
                                categories.map((c) => {
                                    return(
                                        <Option value={c._id}>{c.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>}

                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>


        </div>
    )
}

export default ProductItem
