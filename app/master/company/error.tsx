"use client";

import React from "react";
import { Space, Row, Col } from 'antd';
import { WarningTwoTone } from '@ant-design/icons';
import withTheme from '../../../theme';


interface IErrorCompanyProps { }

const ErrorCompany = function ErrorCompany(props: IErrorCompanyProps) {
    return (
        <Row justify="space-around" align="middle" style={{ width: '100%', height: '50%' }}>
            <Col span={12}>
                <WarningTwoTone style={{ fontSize: '50px' }} twoToneColor="orange" />
                <Space direction="vertical" aline="start">
                    {`Company Page Error :`}
                </Space>
            </Col>
        </Row>
    );
}

const ErrorCompanyPahe = () => {
    return withTheme(<ErrorCompany />);
}
export default ErrorCompanyPahe;