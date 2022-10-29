import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Trending() {
  const [trending, setTrending] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, [url]);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending coins</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trending.map((coin, idx) => (
          <div
            key={idx}
            className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  src={coin.item.small}
                  alt={coin.id}
                  className="mr-4 rounded-full"
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt=""
                  className="w-4 mr-2"
                />
                {coin.item.price_btc && <p>{coin.item.price_btc.toFixed(7)}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
