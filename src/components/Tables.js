import React, { useState, useEffect } from 'react';
import Row from './Row';
const Tables = () => {
    const [API, setAPI] = useState([]);

    useEffect(() => {
        async function getData() {
            const resp = await fetch('https://api.coincap.io/v2/assets').then(resp => resp.json());
            let val = await resp.data;
            const propertiesToRemove = ['explorer', 'maxSupply']
            val.forEach(function (coin) {
                propertiesToRemove.forEach(function (item) {
                    //console.log(coin[item])
                    delete coin[item];
                });
            })
            setAPI(val);
        }
        getData();
    }, []);


    return (
        <section className="container mx-auto ">
            <div className="w-full mb-8 overflow-hidden rounded-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-sm text-gray-500 border-b border-gray-600">
                                <th className="px-4 py-3">Rank</th>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-right">Price</th>
                                <th className="px-4 py-3">Market Cap</th>
                                <th className="px-4 py-3">VWAP24(Hr)</th>
                                <th className="px-4 py-3">Supply</th>
                                <th className="px-4 py-3">Volume(24Hr)</th>
                                <th className="px-4 py-3">Change(24Hr)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                API.map(coin => (
                                    <Row key={coin.rank} rank={coin.rank} name={coin.name} sym={coin.symbol} price={coin.priceUsd
                                    } market={coin.marketCapUsd} vwap={coin.vwap24Hr} supply={coin.supply} volume={coin.volumeUsd24Hr} change={coin.changePercent24Hr} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Tables;