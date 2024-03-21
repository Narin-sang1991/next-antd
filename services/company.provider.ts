
import type { CompanyReponse } from "@/store/company/companyModel";
import { axiosProvider } from "./axios.interceptor";

const modulePath: string = '/api/EntityModule'

export const fetchSearch = async () => {
    const body: any = {
        Criteria: {
            CompanyType: 20,
            CompanyGroupCode: "GJP"
        },
        SortingCriteria: null,
        PagingCriteria: null
    };
    await axiosProvider.post(`${modulePath}/MasterCompany/Search/v1`, body)
        .then((resp) => {
            console.log("API-Response: ", resp);
            const result: { data: CompanyReponse } = resp;
            console.log("Company-Response: ", result);
            // return result;
        })
        .catch((e) => console.log("API-Error: ", e))
    // const response = await fetch(`${baseUrl}/api/EntityModule/MasterCompany/Search/v1`, {
    //     method: "POST",
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //         "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify({
    //         Criteria: {
    //             CompanyType: 20,
    //             CompanyGroupCode: "GJP"
    //         },
    //         SortingCriteria: null,
    //         PagingCriteria: null
    //     }),
    // });
    // const result: { data: CompanyReponse } = await response.json();
    // console.log("CompanyReponse: ", result);
    // return result;
};