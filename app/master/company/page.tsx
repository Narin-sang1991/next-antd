"use client";

import React, { useEffect, useState } from "react";
import { Button, Card, Form, type FormProps, Input } from 'antd';
import { SearchOutlined, PlusCircleOutlined, } from '@ant-design/icons';
import withTheme from '../../../theme';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { searchAsync, selectResult, selectStatus } from "@/store/company/companySlice";
import type { CompanyReponse, Company } from "@/store/company/companyModel";


export type CompanyProps = {}

const Company = function Company(props: CompanyProps) {

    const [formCriteria] = Form.useForm();
    const dispatch = useAppDispatch();
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize] = useState(10);
    const status = useAppSelector(selectStatus);
    const searchResult = useAppSelector(selectResult);

    const [data, setData] = useState<CompanyReponse>({
        TotalItem: 0,
        TotalPage: 0,
        Items: undefined
    });

    //#region Search
    async function onSearch(index: number, sorter?: any) {
        // console.log("page-searchAsync-->");
        setPageIndex(index);
        (async () => {
            let criteria = packCriteria(index, sorter);
            await dispatch(searchAsync(criteria));
        })();

        // const body: any = {
        //     Criteria: {
        //         CompanyType: 20,
        //         CompanyGroupCode: "GJP"
        //     },
        //     SortingCriteria: null,
        //     PagingCriteria: null
        // };
    }
    function packCriteria(index: number, sorter?: any) {
        return {
            SearchText: formCriteria.getFieldValue("SearchText"),
            CompanyType: formCriteria.getFieldValue("CompanyType"),
            CompanyGroupCode: formCriteria.getFieldValue("CompanyGroupCode"),

            indexOffset: index,
            paging: pageSize,
            sorting: (sorter ? sorter.field : undefined),
            sortMode: (sorter ? (sorter.order === "descend" ? 1 : 0) : undefined),
        }
    }
    //#endregion

    return (
        <>
            <Card bordered={true} style={{ borderBottomColor: "LightGray" }} className={"MasterBackground"} >
                <Form
                    layout="inline"
                    name="criteriaFormSearch"
                    form={formCriteria}
                    onFinish={() => onSearch(1)}
                >
                    <Form.Item
                        label="Text: "
                        name="SearchText"
                        rules={[{ required: false }]}
                    >
                        <Input allowClear maxLength={100} />
                    </Form.Item>
                    <Form.Item label="" name="load_data">
                        <Button
                            key="load_data"
                            htmlType="submit"
                            icon={<SearchOutlined />}
                            loading={status === "loading"}
                            disabled={status === "loading"}
                            onClick={() => onSearch(1)}
                        >
                            {"Load Data"}
                        </Button>
                    </Form.Item>
                    <Form.Item label="" name="add_item">
                        <Button
                            key="add_item"
                            icon={<PlusCircleOutlined />}
                            disabled={status === "loading"}
                            // onClick={() => createItem()}
                        >
                            {"Add Item"}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card> 
        </>
    );
}


const CompanyPage = () => {
    return withTheme(<Company />);
}
export default CompanyPage;

