"use client";

import React, { useEffect, useState } from "react";
import { Button, Card, Space } from 'antd';
import withTheme from '../../../theme';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { searchAsync, selectResult, selectStatus } from "@/store/company/companySlice";
import type { CompanyReponse, Company } from "@/store/company/companyModel";


export type CompanyProps = {}

const Company = function Company(props: CompanyProps) {
    const dispatch = useAppDispatch();

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
            <Button onClick={() => dispatch(searchAsync())}>SEARCH</Button>
        </Space>
    );
}


const CompanyPage = () => {
    return withTheme(<Company />);
}
export default CompanyPage;

