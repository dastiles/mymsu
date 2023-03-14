import React, { useState } from 'react'
import { AiOutlineAlert, AiOutlineDownload, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import { links } from './constants'

const MobileNavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="lg:bg-white bg-blue-700 lg:py-1   shadow-sm sticky top-0 z-100">
            <div className="lg:hidden">
                <div className='flex gap-2 items-center px-5 py-4' onClick={() => setOpen(!open)}>
                    <AiOutlineMenu className="text-white text-2xl" />
                    <h3 className='font-semibold text-lg text-white'>myMSU</h3>
                </div>
                <ul className={`${open === true ? 'block' : 'hidden'} text-sm font-bold text-white px-5`}>
                    {
                        links.map((link) => {
                            return (<li className="flex items-center gap-2 py-2 hover:bg-blue-800 cursor-pointer" key={link.text}> {link.Icon} {link.text}</li>)
                        })
                    }
                </ul>
            </div>
            <div className="hidden lg:flex justify-end px-5 ">
                <ul className="flex gap-5 items-center text-sm">
                    <div className="border-gray-400 border-solid border-r-[1px] pr-2">
                        <li className="flex items-center py-4 gap-2 ">Downloads <span><AiOutlineDownload /></span></li></div>

                    <div className="border-gray-400 border-solid border-r-[1px] pr-2">
                        <li className="flex items-center py-4 gap-2 ">Notices <span><AiOutlineAlert /></span></li></div>

                    <div className="border-gray-400 border-solid border-r-[1px] pr-2">
                        <li className="flex items-center py-4 gap-2 ">Online Shopping <span><AiOutlineShoppingCart /></span></li></div>
                    <div className="flex gap-2 items-center">
                        <h4 className="font-bold text-md">CHARLES MADHUKU (STILES)</h4>
                        <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
                            <img src="./assets/devsiles.jpg" alt="avatar" />
                        </div>
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default MobileNavBar