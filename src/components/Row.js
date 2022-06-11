import React from 'react'

function Row(props) {

function convert(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "b"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "m"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "k"

    : Math.abs(Number(labelValue));

}

    return (
            <tr className="text-gray-700 text-center border-2">
                <td className="px-4 py-3  ">{props.rank}</td>
                <td className="px-4 py-3 ">
                    <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src={"https://assets.coincap.io/assets/icons/"+props.sym.toLowerCase()+"@2x.png"} alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="text-black">{props.name}</p>
                            <p className="text-xs text-left text-gray-600">{props.sym}</p>
                        </div>
                    </div>
                </td>
                <td className="text-black ">{"$"+props.price.slice(0,7)}</td>
                <td className="px-4 py-3 text-black ">{"$"+convert(props.market)}</td>
                <td className="px-4 py-3 text-black ">{"$"+parseFloat(props.vwap).toFixed(2)}</td>
                <td className="px-4 py-3 text-black ">{convert(props.supply)}</td>
                <td className="px-4 py-3 text-black ">{"$"+convert(props.volume)}</td>
                <td style={{color:`${props.change < 0 ? "red" : "lightgreen"}`}} className="px-4 py-3 ">{props.change.slice(0,5)+"%"}</td>
            </tr>
    )
}

export default Row