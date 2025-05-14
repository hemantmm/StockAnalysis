// import axios from 'axios';

// const fetchStockDetails = async (stockName: string) => {
//   const options = {
//     method: 'GET',
//     url: 'https://indian-stock-exchange-api2.p.rapidapi.com/corporate_actions',
//     params: { stock_name: stockName },
//     headers: {
//       'x-rapidapi-key': '58bd41ce1fmsh31b5e8f15a000cap163672jsn746bd60990a2',
//       'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching stock details:', error);
//     return null;
//   }
// };

// export { fetchStockDetails };


import axios from 'axios';

const fetchStockDetails = async (stockName: string) => {
  const options = {
    method: 'GET',
    url: 'https://indian-stock-exchange-api2.p.rapidapi.com/stock',
    params: { name: stockName },
    headers: {
      'x-rapidapi-key': '58bd41ce1fmsh31b5e8f15a000cap163672jsn746bd60990a2',
      'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock details:', error);
    throw error;
  }
};

export default fetchStockDetails;
