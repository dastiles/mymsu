import React from 'react'

const SubmitReceipts = () => {
    return (
        <div className="bg-white shadow-md my-4 rounded px-5 py-2">
            <div className="flex justify-between">
                <p className="font-bold text-sm lg:text-md">PAYMENT TRANSFERS (RTGS, ZIPIT)</p>
                <button className="text-white font-bold text-[10px] lg:text-sm py-1 px-2 outline-none bg-blue-600">UPLOAD RTGS PAYMENT</button>
            </div>
            <div className="lg:flex items-center justify-center my-4 hidden text-sm">
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Date</p>
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Source Bank</p>
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Destination Bank</p>
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Reference</p>
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Amount</p>
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Date Submitted</p>
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Status</p>
                <p className="border-gray-400 border-solid border-[1px] py-1 px-2 font-bold">Proof</p>
            </div>
            <div className="bg-[#F6F6FF] py-4 flex justify-end items-center w-full">
                <button className="text-white font-bold text-[10px] lg:text-sm py-1 px-2 outline-none bg-blue-600">Upload RTGS Payment</button>
            </div>
        </div>
    )
}

export default SubmitReceipts