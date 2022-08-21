import { Badge, Table, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallorders, selectallorders, updateorder } from '../../features/orders/ordersSlice';
import {
    CheckCircleOutlined, CloseCircleOutlined, CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';

const Orders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(selectallorders)


    useEffect(() => {

        const interval = setInterval(() => {
            console.log('This will run every second!');
            dispatch(getallorders())
        }, 5000);
        return () => clearInterval(interval);

    }, []);

    const update = (order, value) => {
        let data = {
            id: order._id,
            data: {
                livred: value
            }
        }

        dispatch(updateorder(data))
    }

    const columns = [
        {
            title: 'Avatar',
            key: 'client',
            dataIndex: 'client',
            render: (text, record) => (
                <>
                    <img style={{ height: "30px", width: "30px", borderRadius: "50%", border: '1px solid lightgray' }} src={'http://localhost:5000/getfile/' + record.client.avatar} alt="" />
                </>
            ),
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <>
                    {record.client.name}
                </>
            ),
        },
        {
            title: 'User Email',
            dataIndex: 'email',
            key: 'email',
            render: (text, record) => (
                <>
                    {record.client.email}
                </>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'total_price',
            key: 'total_price',
            render: (text, record) => (
                <>
                    {record.createdAt}
                </>
            ),
        },
        {
            title: 'Total',
            dataIndex: 'total_price',
            key: 'total_price',
            render: (text, record) => (
                <>
                    {record.total_price}
                </>
            ),
        },
        {
            title: 'Products',
            dataIndex: 'total_price',
            key: 'total_price',
            render: (text, record) => (
                <>
                    {record.products.length}
                </>
            ),
        },

        {
            title: 'Livred',
            key: 'livred',
            dataIndex: 'livred',
            render: (text, record) => (
                <>
                    {record.livred === 1 && <Tag color="cyan">in progress</Tag>}
                    {record.livred === 2 && <Tag color="lime">livred</Tag>}
                    {record.livred === 3 && <Tag color="red">canceled</Tag>}
                </>
            ),
        },

        {
            title: 'Actions',
            key: 'livred',
            dataIndex: 'livred',
            render: (text, record) => (
                <>
                    {record.livred === 1 &&
                        <>
                            <CheckCircleOutlined onClick={() => update(record, 2)} style={{ fontSize: "20px", color: "green", cursor: "pointer" }} />
                            <CloseCircleOutlined onClick={() => update(record, 3)} style={{ fontSize: "20px", color: "red", marginLeft: "10px", cursor: "pointer" }} />
                        </>
                    }

                    {record.livred === 2 && <CheckOutlined style={{ color: "green", fontSize: "20px" }} />}
                    {record.livred === 3 && < CloseOutlined style={{ color: "red", fontSize: "20px" }} />}


                </>
            ),
        },


    ];
    return (
        <div className="container"  >
            <h2>Orders <Badge count={orders.length} showZero /></h2>
            <Table columns={columns} dataSource={orders} />

        </div>
    )
}

export default Orders