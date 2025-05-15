import axios from "axios";

const fetchStockData = async(stockName:string)=>{
const options = {
  method: 'GET',
  url: 'https://indian-stock-exchange-api2.p.rapidapi.com/historical_data',
  params: {
    stock_name: stockName,
    period: '1m',
    filter: 'price'
  },
  headers: {
    'x-rapidapi-key': '58bd41ce1fmsh31b5e8f15a000cap163672jsn746bd60990a2',
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
};

export default fetchStockData