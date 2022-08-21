import React from 'react'
import { Result, Button } from 'antd';

const OrderSucces = () => {
    return (
        <div>
            <Result
                status="success"
                title="Your Order successfuly sent"
                extra={[
                    <Button onClick={() => window.location.href = '/clientorders'} type="primary" key="console">
                        See Orders
                    </Button>,
                    <Button onClick={() => window.location.href = '/shop'} key="buy">Continue shopping</Button>,
                  
                
                
                ]}
            />
        </div>
    )
}

export default OrderSucces
