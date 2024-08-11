import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    TI_API_KEY: '5ac404ee58104a66ab36a56934493f14',
      'X-RapidAPI-Key': 'd748ee80dcmshc659d319a3a050fp1fe1e9jsn698bd7ac1139',
      'X-RapidAPI-Host': 'tokeninsight-crypto-api1.p.rapidapi.com'
}
const baseUrl = 'https://tokeninsight-crypto-api1.p.rapidapi.com/api/v1/exchanges/list'

const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

export const cryptoExchangesApi = createApi({
    reducerPath:'cryptoExchangesApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getExchanges:builder.query({
            query:(count)=> createRequest(`?limit=${count}`)
        })
    })
})
export const {useGetExchangesQuery} = cryptoExchangesApi
// export const {useGetCryptoNewsQuery,} = cryptoNewsApi
// const options = {
//     method: 'GET',
//     url: 'https://tokeninsight-crypto-api1.p.rapidapi.com/api/v1/exchanges/list',
//     params: {
//       limit: '300',
//       offset: '0'
//     },
//     headers: {
//       TI_API_KEY: '5ac404ee58104a66ab36a56934493f14',
//       'X-RapidAPI-Key': 'd748ee80dcmshc659d319a3a050fp1fe1e9jsn698bd7ac1139',
//       'X-RapidAPI-Host': 'tokeninsight-crypto-api1.p.rapidapi.com'
//     }
//   };
