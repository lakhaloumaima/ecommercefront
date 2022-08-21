import React, { useEffect, useState } from 'react'
import { Form, Button, Descriptions, Input } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getme, selectautheduser, updateuser, uploadavatar } from '../features/users/usersSlice';
import { CameraOutlined } from '@ant-design/icons';

const Profile = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectautheduser)
    useEffect(() => {
        dispatch(getme())
    }, []);

    const changeavatar = (e) => {
        const data = new FormData()
        data.append('avatar', e.target.files[0])
        dispatch(uploadavatar(data))
        // window.location.reload()
    }


    const [isModalVisible, setIsModalVisible] = useState(false);
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
            id: user._id,
            data: values
        }
        dispatch(updateuser(data))
        setIsModalVisible(false)
        window.location.reload()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>

            {user && <div className='container'>
                <div style={{ dispaly: 'flex', flexDirection: 'column', justifyContent: "center" }}  >
                    <div>
                        <Avatar
                            size={160}
                            src={'http://localhost:5000/getfile/' + user.avatar}
                        />
                    </div>
                    <div style={{ dispaly: "flex", justifyContent: 'center' }} >
                        <CameraOutlined onClick={() => document.getElementById('upload').click()} style={{ fontSize: "25px", color: "orange", cursor: 'pointer' }} />
                    </div>
                    <input onChange={(e) => changeavatar(e)} type="file" id="upload" hidden />
                </div>

                <Descriptions style={{ marginTop: "50px" }} title="User Info">
                    <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                </Descriptions>

                <a onClick={() => showModal()} style={{ fontSize: "25px", color: "orange", cursor: 'pointer' }}><i class="glyphicon glyphicon-pencil"></i>Update</a>

            </div>}

            <Modal footer={null} title="Update" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    initialValues={{
                        name: user.name,
                        email: user.email,

                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout={"vertical"}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input user name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input user email!' }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Profile
