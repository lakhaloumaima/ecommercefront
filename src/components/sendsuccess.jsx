import React from 'react'
import { Result, Button } from 'antd';

const SendSuccess = () => {
    return (
        <div>
            <Result
                status="success"
                title="Your message successfuly sent"
                extra={[
                    <Button onClick={() => window.location.href = '/shop'} type="primary" key="console">
                       Return Home
                    </Button>,
                    <Button onClick={() => window.location.href = '/shop'} key="buy"> shopping</Button>,
                  
                
                ]}
            />
        </div>
    )
}

export default SendSuccess
