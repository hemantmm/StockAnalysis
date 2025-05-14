
'use client';
import React from 'react';
import { useState } from 'react';
// import fetchStockDetails from '../services/stockService';
import fetchStockDetails from './api';

const StockSearch = () => {
  const [stockName, setStockName] = useState('');
  const [stockData, setStockData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (stockName) {
      setLoading(true);
      setError('');
      try {
        const data = await fetchStockDetails(stockName);
        setStockData(data);
      } catch (err) {
        setError('Failed to fetch stock data');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center">Stock Market Search</h1>
      <div className="mt-4 flex space-x-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg w-full"
          placeholder="Enter stock name (e.g., bel)"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSearch}
          disabled={loading}
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {stockData && !loading && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">{stockData.companyName}</h2>
          <p><strong>Industry:</strong> {stockData.industry}</p>
          <p>{stockData.companyProfile.companyDescription}</p>

          <div className="mt-4">
            <h3 className="text-lg font-medium">Current Price:</h3>
            <p>BSE: {stockData.currentPrice.BSE}</p>
            <p>NSE: {stockData.currentPrice.NSE}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium">Stock Technical Data:</h3>
            <ul>
              {stockData.stockTechnicalData.map((item: any, index: number) => (
                <li key={index}>
                  <span>{item.days} Days: </span>
                  <span>BSE: {item.bsePrice}</span> | <span>NSE: {item.nsePrice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockSearch;
