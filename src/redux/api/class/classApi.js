import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const classesApi = createApi({
    reducerPath: 'classApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
    endpoints: (builder) => ({
        getClasses: builder.query({
            query: () => `/classes`,
        }),
    }),
})

export const { useGetClassesQuery } = classesApi