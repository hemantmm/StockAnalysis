// 'use client';
// import React, { useState } from 'react';
// import fetchStockDetails from './stockNameAPI';

// const StockSearch: React.FC = () => {
//   const [stockName, setStockName] = useState<string>('');
//   const [stockData, setStockData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     const data = await fetchStockDetails(stockName);
//     setStockData(data);
//     setLoading(false);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8 p-4 border rounded-lg shadow-md">
//       <input
//         type="text"
//         value={stockName}
//         onChange={(e) => setStockName(e.target.value)}
//         placeholder="Enter stock name"
//         className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
//       />
//       <button
//         onClick={handleSearch}
//         className="w-full p-2 bg-blue-500 text-white rounded-lg"
//       >
//         {loading ? 'Loading...' : 'Search Stock'}
//       </button>

//       {stockData && (
//         <div className="mt-4">
//           <h2 className="text-2xl font-semibold">Board Meetings</h2>
//           <table className="w-full mt-2 table-auto">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">Date</th>
//                 <th className="border px-4 py-2">Agenda</th>
//               </tr>
//             </thead>
//             <tbody>
//               {stockData.board_meetings.data.map((meeting: any, index: number) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{meeting[0]}</td>
//                   <td className="border px-4 py-2">{meeting[1]}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockSearch;
