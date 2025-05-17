(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/stockDataAPI.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
// /src/utils/fetchStockData.ts
__turbopack_context__.s({
    "fetchStockData": (()=>fetchStockData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const fetchStockData = async (symbol)=>{
    const apiKey = ("TURBOPACK compile-time value", "I5Z4985RQ02MWWPI");
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('https://www.alphavantage.co/query', {
            params: {
                function: 'GLOBAL_QUOTE',
                symbol: symbol,
                apikey: apiKey
            }
        });
        const quote = response.data['Global Quote'];
        if (!quote || Object.keys(quote).length === 0) {
            throw new Error("No data found for this stock.");
        }
        return {
            symbol: quote['01. symbol'],
            price: parseFloat(quote['05. price']),
            change: parseFloat(quote['09. change']),
            percentChange: quote['10. change percent']
        };
    } catch (error) {
        console.error('Failed to fetch stock data:', error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import React from 'react';
// import { useState } from 'react';
// import fetchStockDetails from './stockNameAPI';
// import { FaCircleInfo } from "react-icons/fa6";
// import {IoMdClose} from "react-icons/io";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { FaArrowTrendDown } from "react-icons/fa6";
// import fetchStockData from './stockDataAPI';
// import {Chart as ChartJS, LineElement, LinearScale, CategoryScale, PointElement, Tooltip,Legend} from 'chart.js';
// import { Line } from 'react-chartjs-2';
// ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement, Tooltip, Legend);
// interface StockData {
//   days: number;
//   bsePrice: number;
//   nsePrice: number;
// }
// const periodWiseOptions = ['1m', '6m', '1yr', '3yr', '5yr', '10yr', 'max'];
// const StockSearch = () => {
//   const [stockName, setStockName] = useState('');
//   const [stockData, setStockData] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [showDetails, setShowDetails] = useState(false);
//   const [stockPriceData, setStockPriceData] = useState<Array<[string,string]>>([]);
//   const [periodWise, setPeriodWise] = useState('1m');
//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };
//   const handleSearch = async () => {
//     if (stockName) {
//       setLoading(true);
//       setError('');
//       try {
//         const data = await fetchStockDetails(stockName);
//         const historicalData= await fetchStockData(stockName, periodWise);
//         setStockData(data);
//         setStockPriceData(historicalData.datasets[0].values);
//       } catch (err) {
//         setError('Failed to fetch stock data: ' + err);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };
//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-3xl font-semibold text-center">Stock Market Search</h1>
//       <div className="mt-4 flex space-x-4">
//         <input
//           type="text"
//           className="p-2 border border-gray-300 rounded-lg w-full"
//           placeholder="Enter stock name (e.g., bel)"
//           value={stockName}
//           onChange={(e) => setStockName(e.target.value)}
//         />
//         <select
//           className="p-2 border border-gray-300 rounded-lg"
//           value={periodWise}
//           onChange={(e) => setPeriodWise(e.target.value)}
//         >
//           {periodWiseOptions.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         <button
//           className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer"
//           onClick={handleSearch}
//           disabled={loading}
//         >
//           Search
//         </button>
//       </div>
//       {loading && <p className="mt-4 text-center">Loading...</p>}
//       {error && <p className="mt-4 text-center text-red-500">{error}</p>}
//       {stockData && !loading && (
//         <div className="mt-8">
//               {
//                 showDetails && (<div className='fixed inset-0 flex flex-col items-center rounded-lg bg-cyan-400 bg-opacity-10 backdrop-blur-md'>
//                   <button onClick={toggleDetails} className='absolute top-4 right-4 p-2 rounded-lg cursor-pointer bg-white text-black'>
//                     <IoMdClose size={20} title='close' />
//                   </button>
//                   <div className='text-center rounded-lg bg-white text-black p-4 shadow-md max-w-md w-full mt-20'>
//                     <h2 className="text-xl font-semibold">{stockData.companyName}</h2>
//                     <p><strong>Industry:</strong> {stockData.industry}</p>
//                     <p>{stockData.companyProfile.companyDescription}</p> 
//                   </div>
//                 </div>)
//               }
//           <div className="mt-4">
//             <div className='flex justify-between items-center'>
//               <h3 className="text-lg font-medium">Current Price:</h3>
//               <button onClick={toggleDetails} className='p-2 rounded-lg cursor-pointer'>{!showDetails ? <FaCircleInfo size={20} title='info' /> : '' }</button>
//             </div>
//               <p className='text-lg font-semibold flex'>
//                 NSE: {stockData.currentPrice.NSE} 
//                 <span className={`ml-4 flex items-center ${stockData.percentChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
//                   {stockData.percentChange > 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown size={20} />} &nbsp;{stockData.percentChange} %
//                 </span>
//               </p>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-lg font-medium">Stock Technical Data:</h3>
//             <ul>
//               {stockData.stockTechnicalData.map((item: StockData, index: number) => (
//                 <li key={index}>
//                   <span>{item.days} Days: </span>
//                   <span>BSE: {item.bsePrice}</span> | <span>NSE: {item.nsePrice}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//       {
//         stockPriceData.length > 0 && !loading && (
//           <div className="mt-4">
//             <h3 className="text-lg font-medium">Stock Price Data:</h3>
//             <Line
//               data={{
//                 labels: stockPriceData.map(([date]) => date),
//                 datasets: [
//                   {
//                     label: 'Stock Price',
//                     data: stockPriceData.map(([, price]) => parseFloat(price)),
//                     tension: 0.1,
//                     fill: false,
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                   },
//                 ],
//               }}
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: {
//                     display: true,
//                     position: 'top',
//                   },
//                 },
//                 scales: {
//                   x: {
//                     title: {
//                       display: true,
//                       text: 'Date',
//                     },
//                   },
//                   y: {
//                     title: {
//                       display: true,
//                       text: 'Price',
//                     },
//                     beginAtZero: false,
//                   },
//                 },
//               }}
//             />
//           </div>
//         )
//       }
//     </div>
//   );
// };
// export default StockSearch;
// /src/app/page.tsx or any other component
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import { fetchStockData } from '../utils/fetchStockData';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$stockDataAPI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/stockDataAPI.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Home() {
    _s();
    const [symbol, setSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [stock, setStock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSearch = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$stockDataAPI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchStockData"])(symbol);
            setStock(data);
            setError('');
        } catch (err) {
            setError('Failed to fetch data. Try again later.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold mb-4",
                children: "Stock Info"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: symbol,
                onChange: (e)=>setSymbol(e.target.value.toUpperCase()),
                placeholder: "Enter Stock Symbol (e.g., AAPL)",
                className: "border p-2 mr-2"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSearch,
                className: "bg-blue-500 text-white px-4 py-2 rounded",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 mt-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 222,
                columnNumber: 17
            }, this),
            stock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 border p-4 rounded shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Symbol:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 226,
                                columnNumber: 14
                            }, this),
                            " ",
                            stock.symbol
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Price:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 227,
                                columnNumber: 14
                            }, this),
                            " $",
                            stock.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Change:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 228,
                                columnNumber: 14
                            }, this),
                            " ",
                            stock.change
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Percent Change:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 229,
                                columnNumber: 14
                            }, this),
                            " ",
                            stock.percentChange
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s(Home, "XTUzA3RUNy4UCfXuBoeqi7Md3zw=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_73adbb4a._.js.map