import React from 'react'
import { AiOutlineCloud, AiOutlineDownload, AiOutlineMail, AiOutlineRead } from 'react-icons/ai'
import { FaMoneyBillAlt } from 'react-icons/fa'

const ProgramContainer = () => {
    return (
        <div className="shadow-md rounded-md bg-white px-5 py-4">
            <h1 className="text-lg font-bold tracking-wide">Your Programmes</h1>
            <div className="bg-[#EFEFF6]  p-5 my-5">
                <p className="font-bold text-sm l">Bachelor of Commerce in Data Science and Informatics (BS08) <span className="bg-yellow-500 px-2 rounded">Convectional</span></p>

            </div>
            <div className="flex flex-wrap gap-5 text-sm">
                <div>
                    <button className="border-red-600 border-solid border-[2px] text-red-600 py-1 px-4 rounded-md outline-none flex items-center gap-2"><FaMoneyBillAlt />Upload RTGS Payment</button>
                </div>

                <div>
                    <button className="border-blue-600 border-solid border-[2px] text-blue-600 py-1 px-4 rounded-md outline-none flex items-center gap-2"> <AiOutlineMail /> Open Student Mail</button>
                </div>
                <div>
                    <button className="border-blue-600 border-solid border-[2px] text-blue-600 py-1 px-4 rounded-md outline-none flex items-center gap-2"> <AiOutlineCloud /> View Online Classes</button>
                </div>
                <div>
                    <button className="border-yellow-500 border-solid border-[2px]  py-1 px-4 rounded-md outline-none flex items-center gap-2"> <AiOutlineRead /> Virtual Classroom Guide</button>
                </div>
                <div>
                    <button className="border-yellow-500 border-solid border-[2px]  py-1 px-4 rounded-md outline-none flex items-center gap-2"> <AiOutlineDownload />Downloads</button>
                </div>
            </div>
        </div>
    )
}

export default ProgramContainer