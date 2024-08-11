import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'd748ee80dcmshc659d319a3a050fp1fe1e9jsn698bd7ac1139',
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}
const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk'

const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:(newsCategory)=> createRequest(``)
        })
    })
})
export const {useGetCryptoNewsQuery,} = cryptoNewsApi
// const options = {
//     method: 'GET',
//     url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
//     headers: {
//       'X-RapidAPI-Key': 'd748ee80dcmshc659d319a3a050fp1fe1e9jsn698bd7ac1139',
//       'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
//     }
//   };