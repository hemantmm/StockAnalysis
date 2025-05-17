// import axios from "axios";

// const fetchStockData = async(stockName:string, periodWise:string)=>{
// const options = {
//   method: 'GET',
//   url: 'https://indian-stock-exchange-api2.p.rapidapi.com/historical_data',
//   params: {
//     stock_name: stockName,
//     period: periodWise,
//     filter: 'price'
//   },
//   headers: {
//     'x-rapidapi-key': '58bd41ce1fmsh31b5e8f15a000cap163672jsn746bd60990a2',
//     'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
//     return response.data;
// }catch (error) {
// 	console.error(error);
// }
// };

// export default fetchStockData

import axios from 'axios';

const API_KEY = 'sk-live-wcgA1sqh67uosD0RtHMeJBEUrhxR5nBUyVBHbXpI'; // New IndianAPI key

const fetchStockData = async (stockName: string, periodWise: string) => {
  const options = {
    method: 'GET',
    url: 'https://stock.indianapi.in/historical_data',
    params: {
      stock_name: stockName,
      period: periodWise,
      filter: 'price', // Keep this as per your original intention
    },
    headers: {
      'X-Api-Key': API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching historical stock data:', error);
    throw error;
  }
};

export default fetchStockData;
