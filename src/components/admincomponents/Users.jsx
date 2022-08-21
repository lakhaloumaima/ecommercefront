import React, { useEffect } from 'react'
import { Badge, Image, Table, message } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser, getusers, selectseletestatus, selectusers } from '../../features/users/usersSlice';
import Avatar from 'antd/lib/avatar/avatar';

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(selectusers)
    const deletstatus = useSelector(selectseletestatus)

    const success = () => {
        message.success('user successfuly deleted');
    };

    const error = () => {
        message.error('error deleting the user');
    };

    useEffect(() => {
        if (deletstatus === 'success') {
            success()
            dispatch(getusers())
        } else if (deletstatus === 'failure') {
            error()
        }
    }, [deletstatus]);

    useEffect(() => {
        dispatch(getusers())
    }, []);

    const columns = [
        {
            title: 'Avatar',
            key: 'avatar',
            dataIndex: 'tags',
            render: (text, record) => (
                <>
                    <Avatar
                        src={<Image src={"http://localhost:5000/getfile/" + record.avatar} />}
                    />
                </>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Delete',
            key: 'delete',
            dataIndex: 'delete',
            render: (text, record) => (
                <>
                    <DeleteOutlined onClick={() => dispatch(deleteuser(record._id))} style={{ color: 'red', cursor: 'pointer' }} />
                </>
            ),
        },
    ];



    return (
        <div className='container' >
            <h2>Users <Badge count={users.length} /></h2>
            <Table columns={columns} dataSource={users} />
        </div>
    )
}

export default Users