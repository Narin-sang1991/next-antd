"use client";

import React, { useEffect, useState } from "react";
import { Card, Space } from 'antd';
import withTheme from '../../../theme';


export type CompanyProps = {}

const Company = function Company(props: CompanyProps) {
    return (
        <Space direction="vertical" size={16}>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Space>
    );
}


const CompanyPage = () => {
    return withTheme(<Company />);
}
export default CompanyPage;

