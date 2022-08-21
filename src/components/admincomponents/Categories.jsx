import { Badge, message, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { Button, Tooltip } from 'antd';
import { PlusOutlined, CloseOutlined,CameraOutlined,EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createcategory, deletecategory, getcategories, selectaddstatus, selectcategories,selectdatachanged, updatecategory, updatecategoryimage } from '../../features/categories/categoriesSlice';
import { CloseCircleOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import { Form, Input } from 'antd';
const Categories = () => {

    const [displayform, setdisplayform] = useState(false);

    const [name, setname] = useState('');
    const [icon, seticon] = useState(null);
    const [id, setid] = useState('');

    const dispatch = useDispatch()
    const addstatus = useSelector(selectaddstatus)
    const datachanged = useSelector(selectdatachanged)
    const categories = useSelector(selectcategories)

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (addstatus === 'success') {
            setdisplayform(false)
            dispatch(getcategories())
            
        }
    }, [addstatus]);

    useEffect(() => {
        dispatch(getcategories())
    }, [datachanged]);

    const success = () => {
        message.success('category successfuly created');
    };

    const error = () => {
        message.error('category not created');
    };

    const showModal = (cat) => {
        setname(cat.name)
        seticon(cat.icon)
        setid(cat._id)
        setIsModalVisible(true);
    };

    const addcategory = () => {

        const data = new FormData()

        data.append('name', name)
        data.append('image', icon)

        dispatch(createcategory(data))

    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            id : id,
            data : values,
        }
        dispatch(updatecategory(data))
        handleCancel()
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    
    const updateimage = (e) => {
        const fdata = new FormData()
        fdata.append('image',e.target.files[0])

        let data = {
            id:id,
            data: fdata
        }
        dispatch(updatecategoryimage(data))
    }

    const columns = [
        {
            title: 'Icon',
            key: 'icon',
            dataIndex: 'icon',
            render: (text, record) => (
                <>
                    <img style={{ height: "25px", width: '25px' }} src={"http://localhost:5000/getfile/" + record.icon} alt="" />
                </>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
           
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <EditOutlined onClick={()=> showModal(record)} style={{ color: 'green', cursor: 'pointer' }} />
               
                    <CloseCircleOutlined onClick={() => dispatch(deletecategory(record._id))} style={{ color: 'red', cursor: 'pointer' }} />
                    
                     </Space>
            ),
        },
    ];

    return (

        <div className="container"  >
            <h2>Categories <Badge count={categories.length} showZero /></h2>

            <div className='products-tools' >
            <Tooltip title="add">
                <Button style={{ background: `${displayform ? 'red' : 'blue'}` }} onClick={() => setdisplayform(!displayform)} type="primary" shape="circle" icon={displayform ? <CloseOutlined /> : <PlusOutlined />} />
            </Tooltip>
            </div>

            {displayform && <div className='categoryform' >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="category name" />
                </div>

                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input onChange={(e) => seticon(e.target.files[0])} class="form-control" type="file" id="formFile" />
                </div>

                <Button onClick={() => addcategory()} style={{ background: "#FBB808", outline: "none", border: 'none' }} type="primary">Create</Button>
            </div>}

            <Table style={{ marginTop: "15px" }} columns={columns} dataSource={categories} />


            <Modal footer={null} title="Update categories" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <img src={'http://localhost:5000/getfile/' + icon}  />
                    <div >
                        <CameraOutlined style={{ marginLeft:"50%"}} onClick={() => document.getElementById('uploadcategories').click()} className='avataricon' />
                        <input type="file" onChange={(e)=> updateimage(e)}  hidden id="uploadcategories" />
                    </div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            name : name 
                            
                         }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                           label="name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {/* form */}
            </Modal>

        </div>


    )
}

export default Categories