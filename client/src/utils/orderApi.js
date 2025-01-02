import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_URL } from "./Constants";

export const ordersApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Base_URL}/order` }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
      }),
    }),
    getOrderByEmail: builder.query({
        query: (email)=>({
            url: `/${email}`
        })
    })
  }),
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;

export default ordersApi;
