import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const onepieceapi = createApi({
  reducerPath: 'onepieceapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.api-onepiece.com'}),
  endpoints: (builder) =>  ({
    GetCrews: builder.query({
      query: () => `crews`,
    }), 
    GetCharacters: builder.query({
      query: (id) => `characters/crew/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default  onepieceapi;