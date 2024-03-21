import { createAppSlice } from "@/store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchSearch } from "@/services/company.provider";
import type { CompanyReponse } from "@/store/company/companyModel";

export interface CompanySliceState {
  searchResult: CompanyReponse;
  status: "idle" | "loading" | "failed";
}

const initialState: CompanySliceState = {
  searchResult: {
    TotalItem: 0,
    TotalPage: 0,
    Items: undefined
  },
  status: "idle",
};


export const companySlice = createAppSlice({
  name: "company",
  initialState,

  reducers: (create) => ({

    searchAsync: create.asyncThunk(
      async (body: any) => {
        const response = await fetchSearch(body);
        console.log("redux-response-->", response);
        return response;
      },
      {
        pending: (state, action) => {
          console.log("redux-pending-->", action.payload);
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          console.log("redux-fulfilled-->", action.payload);
          // const payload: { data: CompanyReponse } = action.payload;
          state.status = "idle";
          // state.searchResult = payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    )

  }),

  selectors: {
    selectResult: (company) => company.searchResult,
    selectStatus: (company) => company.status,
  },
});

export const { searchAsync } = companySlice.actions;

export const { selectResult, selectStatus } = companySlice.selectors;