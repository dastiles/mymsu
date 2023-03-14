import React from 'react'
import { AiOutlineMoneyCollect } from 'react-icons/ai'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaMoneyBillAlt, FaPiggyBank } from 'react-icons/fa'
import { GrMoney } from 'react-icons/gr'

const Financials = () => {
    return (
        <div className="bg-white shadow-md  rounded-md pb-8 px-5">
            <p className="font-bold text-sm text-black pb-8 pt-2 items-center flex gap-2 "><AiOutlineMoneyCollect />Financials</p>

            <div>
                <p className="border-gray-200 border-solid border-[1px] py-3 px-4 items-center flex gap-2 rounded text-sm  hover:bg-[#EFEFF6] cursor-pointer"><FaMoneyBillAlt />Fees Statement <span className="text-white bg-blue-600 text-[12px] h-[20px] text-center flex items-center justify-center font-bold px-1 rounded">RTGS</span></p>
                <p className="border-gray-200 border-solid border-[1px] py-3 px-4 items-center flex gap-2 rounded text-sm  hover:bg-[#EFEFF6] cursor-pointer"><FaMoneyBillAlt />Fees Statement <span className="text-white bg-blue-600 text-[12px] h-[20px] text-center flex items-center justify-center font-bold px-1 rounded">USD</span></p>
                <p className="border-gray-200 border-solid border-[1px] py-3 px-4 items-center flex gap-2 rounded text-sm  hover:bg-[#EFEFF6] cursor-pointer"><GrMoney />RTGS Payments</p>
                <p className="border-gray-200 border-solid border-[1px] py-3 px-4 items-center flex gap-2 rounded text-sm  hover:bg-[#EFEFF6] cursor-pointer"><FaPiggyBank />Bank Deposits</p>
                <p className="border-gray-200 border-solid border-[1px] py-3 px-4 items-center flex gap-2 rounded text-sm  hover:bg-[#EFEFF6] cursor-pointer"><BsFillArrowRightCircleFill />OverPayments Funds Transfer</p>
            </div>

        </div>
    )
}

export default Financials