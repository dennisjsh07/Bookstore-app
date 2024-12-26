import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_URL } from "./Constants";

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Base_URL}/book` }),
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
    }),
    fetchBookById: builder.query({
      query: (id) => `/${id}`,
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/create-book",
        method: "POST",
        body: newBook,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteSingleBook: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteSingleBookMutation,
} = booksApi;
