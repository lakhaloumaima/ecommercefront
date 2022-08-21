import React from 'react'
import { useDispatch } from 'react-redux';
import {  login } from '../features/users/usersSlice';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Alert, message } from 'antd';

const Authentication = () => {
   /* const failed = () => {
        message.error('error');
      }; 
      */
  const dispatch = useDispatch()
  const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            email : values.email,
            password : values.password
        }

        dispatch(login(data))
        //failed();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ marginTop: "-200px" }}  >
           
           
            <div className='products-catagories-area clearfix' >
            
            <Form
            style={{marginTop:"200px"}}
                name="basic"
                labelCol={{
                    span: 4,
                    offset:3
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col span={2} offset={10} >
                        <h1>Login</h1>
                    </Col>
                </Row>

              
                
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 7,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 7,
                        span: 8,
                    }}
                >
                    <Button style={{background:"#FBB808",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            
        </div>
        </div>
    )
}

export default Authentication
