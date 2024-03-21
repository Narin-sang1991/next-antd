import { createAppSlice } from "@/store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchSearch } from "@/services/company.provider";
import type { CompanyReponse } from "@/store/company/companyModel";

export interface CompanySliceState {
  searchResult?: CompanyReponse;
  status: "idle" | "loading" | "failed";
}

const initialState: CompanySliceState = {
  searchResult: undefined,
  status: "idle",
};

export const companySlice = createAppSlice({
  name: "company",
  initialState,

  reducers: (create) => ({

    searchAsync: create.asyncThunk(
      async (amount: number) => {
        const response = await fetchSearch();
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.searchResult = action.payload;
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