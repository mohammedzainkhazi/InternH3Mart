import React from 'react'
import Tables from "./Tables"

function Stats() {
    return (
        <section style={{paddingBottom:"8%",height:"200px"}} className="w-full m-0 pl-0 pr-0 ml-0 absolute bg-gradient-to-r from-blue-800 to-blue-300 text-white body-font ">
            <div className="container flex w-full items-center justify-center mx-auto">
                <div className="flex justify-around text-center">
                    <div className="p-4 m-8 mt-0 mb-0 sm:w-full w-full">
                    <h2 className="mr-9 p-0  w-full title-font font-bold sm:text-md text-white">MARKET CAP</h2>
                        <p style={{fontSize:"20px"}}>$1.59T</p>
                    </div>
                    <div className="p-4 m-8 mt-0 mb-0 sm:w-full w-full">
                        <h2 className="mr-9 p-0  w-full title-font font-bold sm:text-md text-white">EXCHANGE VOL</h2>
                        <p style={{fontSize:"20px"}}>$50.68B</p>
                    </div>
                    <div className="p-4 m-6 mt-0 mb-0 sm:w-full w-full">
                        <h2 className="title-font font-bold sm:text-md text-white">ASSETS</h2>
                        <p style={{fontSize:"20px"}}>2295</p>
                    </div>
                    <div className="p-4 m-8 mt-0 mb-0 sm:w-full w-full">
                        <h2 className="title-font font-bold sm:text-md text-white">EXCHANGES</h2>
                        <p style={{fontSize:"20px"}}>75</p>
                    </div>
                    <div className="p-4 m-8 mt-0 mb-0 sm:w-full w-full">
                        <h2 className="title-font font-bold sm:text-md text-white">MARKETS</h2>
                        <p style={{fontSize:"20px"}}>15,129</p>
                    </div>
                    <div  className="p-4  m-8 mt-0 mb-0 lg:w-full sm:w-full w-full">
                        <p className="title-font font-bold sm:text-md text-white">BTC INDEX</p>
                        <p style={{fontSize:"20px"}}>35.2%</p>
                    </div>
                </div>
            </div>
            <div className='rounded bg-white ml-40 mr-40'>
                <Tables/>
            </div>
        </section>
    )
}

export default Stats